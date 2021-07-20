import { GetStaticProps } from "next"
import Head from "next/head"
import * as S from "styles/styles"
import firebase from "services/firebaseConnection"
import { useState } from "react"
import Image from "next/image"

interface IDonaters {
	id: string
	donate: boolean
	lastDonate: Date
	image: string
}

interface IHomeProps {
	data: string
}

export default function Home({ data }: IHomeProps) {
	const [donaters] = useState<IDonaters[]>(JSON.parse(data))

	return (
		<>
			<Head>
				<title>Board - Organizando Tarefas</title>
			</Head>
			<S.Wrapper>
				<Image
					width={350}
					height={350}
					src="/img/board-user.svg"
					alt="Rapaz em cima de uma notebook gigante"
				/>

				<S.Section>
					<S.Title>
						Uma ferramenta para seu dia a dia, escreva, planeje e organize-se
					</S.Title>
					<S.Text>
						<S.Span>100% Gratuito</S.Span> e online
					</S.Text>

					{donaters.length !== 0 && (
						<S.ConditionalTitle>Apoiadores: </S.ConditionalTitle>
					)}

					<S.Wrap>
						{donaters.map((donater) => (
							<S.Avatar
								key={donater.id}
								src={donater.image}
								alt="Imagem do doador"
							/>
						))}
					</S.Wrap>
				</S.Section>
			</S.Wrapper>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const donaters = await firebase.firestore().collection("users").get()

	const treatedDonaters = donaters.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data()
		}
	})

	const data = JSON.stringify(treatedDonaters)

	return {
		props: {
			data
		},
		revalidate: 60 * 60
	}
}
