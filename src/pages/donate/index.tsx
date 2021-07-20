import * as S from "styles/donate-style"
import Head from "next/head"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import firebase from "services/firebaseConnection"
import { useState } from "react"
import Image from "next/image"

interface IUser {
	user: {
		name: string
		id: string
		image: string
	}
}

const Donate = ({ user }: IUser) => {
	const [vip, setVip] = useState(false)

	async function handleSaveDonate() {
		await firebase
			.firestore()
			.collection("users")
			.doc(user.id)
			.set({
				donate: true,
				lastDonate: new Date(),
				image: user.image
			})
			.then(() => {
				setVip(true)
			})
	}

	return (
		<>
			<Head>
				<title>Ajude a plataforma Board</title>
			</Head>
			<S.Wrapper>
				<Image
					width={300}
					height={300}
					src="/img/rocket.svg"
					alt="Imagem de um fogete"
				/>
				{vip && (
					<S.VIP>
						<Image
							width={50}
							height={50}
							src={user.image}
							alt="Imagem do avatar do github"
						/>
						<S.VipSpan>Parabêns, você é o novo apoiador!</S.VipSpan>
					</S.VIP>
				)}

				<S.Title>Seja um apoiador deste projeto 🏆</S.Title>
				<S.SubTitle>
					Contribua com apenas <S.Span>R$ 1,00</S.Span>
				</S.SubTitle>

				<S.Button onClick={handleSaveDonate}>Simular Doação</S.Button>
			</S.Wrapper>
		</>
	)
}

export default Donate

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

	const user = {
		name: session?.user.name,
		id: session?.id,
		image: session?.user.image
	}

	return {
		props: {
			user
		}
	}
}
