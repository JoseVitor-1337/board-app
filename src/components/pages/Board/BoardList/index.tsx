import { Dispatch, memo, SetStateAction } from "react"
import { FiCalendar, FiEdit2, FiTrash } from "react-icons/fi"
import Link from "next/link"
import firebase from "services/firebaseConnection"

import { ITasks, IUser } from "pages/board"
import * as S from "./styles"

interface IProps {
	user: IUser
	taskList: ITasks[]
	setTaskList: Dispatch<SetStateAction<ITasks[]>>
	setTaskEdit: Dispatch<SetStateAction<ITasks>>
	setInput: Dispatch<SetStateAction<string>>
}

const BoardList = ({
	user,
	taskList,
	setTaskList,
	setTaskEdit,
	setInput
}: IProps) => {
	async function handleDelete(id: string) {
		await firebase
			.firestore()
			.collection("tarefas")
			.doc(id)
			.delete()
			.then(() => {
				const taskDeleted = taskList.filter((task) => {
					return task.id !== id
				})

				setTaskList(taskDeleted)
			})
	}

	async function handleEditTask(task: ITasks) {
		setInput(task.task)
		setTaskEdit(task)
	}

	return (
		<S.Section>
			{taskList.map((task) => (
				<S.Article key={task.id}>
					<Link href={`/board/details/${task.id}`}>
						<S.Text>{task.task}</S.Text>
					</Link>

					<S.Actions>
						<S.WrapIcons>
							<S.Wrap>
								<FiCalendar size={15} color="#FFB800" />
								<S.Time>{task.createdFormated}</S.Time>
							</S.Wrap>

							{user.vip && (
								<S.Button onClick={() => handleEditTask(task)}>
									<FiEdit2 size={15} color="#FFF" />
									<S.Span>Editar</S.Span>
								</S.Button>
							)}
						</S.WrapIcons>

						<S.Button onClick={() => handleDelete(task.id)}>
							<FiTrash size={15} color="#FF3635" />
							<S.Span>Excluir</S.Span>
						</S.Button>
					</S.Actions>
				</S.Article>
			))}
		</S.Section>
	)
}

export default memo(BoardList)
