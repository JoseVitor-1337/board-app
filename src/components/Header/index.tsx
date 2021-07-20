import { memo } from "react"

import Link from "next/link"
import Image from "next/image"
import * as S from "./styles"

import { FiX } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

import { signIn, signOut, useSession } from "next-auth/client"

function Header() {
	const [session] = useSession()

	return (
		<S.Header>
			<S.Wrap>
				<Link href="/">
					<a>
						<img src="/img/logo.svg" alt="Logo do Site - Board" />
					</a>
				</Link>
				<S.Navbar>
					<Link href="/">
						<S.Link>Home</S.Link>
					</Link>
					<Link href="/board">
						<S.Link>Meu Board</S.Link>
					</Link>
				</S.Navbar>

				{session ? (
					<S.Button type="button" onClick={() => signOut()}>
						<div style={{ marginRight: "1rem" }}>
							<Image
								width={35}
								height={35}
								src={session?.user?.image || ""}
								alt="Foto do Usuário"
							/>
						</div>
						Olá {session?.user?.name}
						<FiX color="#737380" style={{ marginLeft: "1rem" }} />
					</S.Button>
				) : (
					<S.Button type="button" onClick={() => signIn("github")}>
						<FaGithub color="#FFB800" />
						Entrar no Github
					</S.Button>
				)}
			</S.Wrap>
		</S.Header>
	)
}

export default memo(Header)
