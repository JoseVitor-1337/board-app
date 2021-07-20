import Link from "next/link"
import { memo } from "react"
import * as S from "./styles"

const SupportButton = () => {
	return (
		<S.DonateContainer>
			<Link href="/donate">
				<S.Button>Apoiar</S.Button>
			</Link>
		</S.DonateContainer>
	)
}

export default memo(SupportButton)
