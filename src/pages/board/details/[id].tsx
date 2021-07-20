import { GetServerSideProps } from "next"
import Head from "next/head"
import { getSession } from "next-auth/client"
import { memo } from "react"
import firebase from "services/firebaseConnection"
import { format } from "date-fns"
import { ITasks } from ".."
import * as S from "styles/details-style"
import { FiCalendar } from "react-icons/fi"

const TaskDetails = ({ data }: { data: string }) => {
	const task = JSON.parse(data) as ITasks

	return (
		<>
			<Head>
				<title>Detalhes da sua tarefa</title>
			</Head>
			<S.Article>
				<S.Actions>
					<S.IconWrap>
						<FiCalendar size={30} color="#FFF" />
						<S.Span>Tarefa criada:</S.Span>
						<S.Time>{task.createdFormated}</S.Time>
					</S.IconWrap>
				</S.Actions>
				<S.Paragraph>{task.task}</S.Paragraph>
			</S.Article>
		</>
	)
}

export default memo(TaskDetails)

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params
}) => {
	const session = await getSession({ req })

	if (!session?.vip) {
		return {
			redirect: {
				destination: "/board",
				permanent: false
			}
		}
	}

	const { id } = params

	const data = await firebase
		.firestore()
		.collection("tarefas")
		.doc(String(id))
		.get()
		.then((document) => {
			const { created, task, userId, userName } = document.data()

			const data = {
				id: document.id,
				created,
				createdFormated: format(created.toDate(), "dd MMMM yyyy"),
				task,
				userId,
				userName
			}

			return JSON.stringify(data)
		})
		.catch(() => {
			return {}
		})

	if (Object.keys(data).length === 0) {
		return {
			redirect: {
				destination: "/board",
				permanent: false
			}
		}
	}

	return {
		props: {
			data
		}
	}
}
