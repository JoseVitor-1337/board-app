import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { useState } from "react"
import { FormEvent, memo } from "react"
import { FiPlus, FiX } from "react-icons/fi"
import { format } from "date-fns"
import Head from "next/head"

import * as S from "styles/board-style"
import SupportButton from "components/SupportButton"
import BoardList from "components/pages/Board/BoardList"
import BoardFooter from "components/pages/Board/BoardFooter"
import firebase from "services/firebaseConnection"

export interface ITasks {
	id: string
	created: string | Date
	createdFormated?: string
	task: string
	userId: string
	userName: string
}

export interface IUser {
	name: string
	id: string
	vip: boolean
	lastDonate: string | Date
}

interface IProps {
	tasks: string
	user: IUser
}

const Board = ({ user, tasks }: IProps) => {
	const [input, setInput] = useState("")
	const [taskList, setTaskList] = useState<ITasks[]>(JSON.parse(tasks))
	const [taskEdit, setTaskEdit] = useState<ITasks | null>(null)

	async function AddTask() {
		await firebase
			.firestore()
			.collection("tarefas")
			.add({
				created: new Date(),
				task: input,
				userId: user.id,
				userName: user.name
			})
			.then((document) => {
				const data = {
					id: document.id,
					created: new Date(),
					createdFormated: format(new Date(), "dd MMMM yyyy"),
					task: input,
					userId: user.id,
					userName: user.name
				}

				setTaskList([...taskList, data])
				setInput("")
			})
			.catch((err) => {
				console.log(`Erro ao cadastrar`, err)
			})
	}

	async function EditTask() {
		await firebase
			.firestore()
			.collection("tarefas")
			.doc(taskEdit.id)
			.update({ task: input })
			.then(() => {
				const data = taskList
				const taskIndex = taskList.findIndex((item) => item.id === taskEdit.id)
				data[taskIndex].task = input

				setTaskList(data)
				setTaskEdit(null)
				setInput("")
			})
			.catch(() => {
				console.log("Houve um erro")
			})
	}

	async function handleAddTask(event: FormEvent) {
		event.preventDefault()

		if (input === "") {
			alert("Preencha alguma tarefa")
			return
		}

		if (taskEdit) {
			EditTask()
		} else {
			AddTask()
		}
	}

	function resetEditTask() {
		setInput("")
		setTaskEdit(null)
	}

	return (
		<>
			<Head>
				<title>Minhas Tarefas - Board</title>
			</Head>
			<S.Wrapper>
				{taskEdit && (
					<S.Span>
						<S.Button onClick={resetEditTask}>
							<FiX size={30} color="#FF3636" />
						</S.Button>
						Você está editando uma tarefa
					</S.Span>
				)}

				<S.Form onSubmit={handleAddTask}>
					<S.Input
						type="text"
						placeholder="Digite sua tarefa..."
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<S.Button type="submit">
						<FiPlus size={25} color="#17181f" />
					</S.Button>
				</S.Form>
				<S.Title>
					Você tem {taskList.length}{" "}
					{taskList.length > 1 ? "Tarefas" : "Tarefa"}!
				</S.Title>

				<BoardList
					user={user}
					taskList={taskList}
					setInput={setInput}
					setTaskList={setTaskList}
					setTaskEdit={setTaskEdit}
				/>
			</S.Wrapper>

			{user.vip && <BoardFooter user={user} />}

			<SupportButton />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req })

	if (!session?.id) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		}
	}

	const tasks = await firebase
		.firestore()
		.collection("tarefas")
		.where("userId", "==", session?.id)
		.orderBy("created", "asc")
		.get()

	const data = JSON.stringify(
		tasks.docs.map((item) => {
			return {
				id: item.id,
				createdFormated: format(item.data().created.toDate(), "dd MMMM yyyy"),
				...item.data()
			}
		})
	)

	const user = {
		name: session?.user?.name,
		id: session?.id,
		vip: session?.vip,
		lastDonate: session?.lastDonate
	}

	return {
		props: {
			user,
			tasks: data
		}
	}
}

export default memo(Board)
