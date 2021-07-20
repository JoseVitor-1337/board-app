import { memo } from "react"
import { FiClock } from "react-icons/fi"
import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"
import * as S from "./styles"
import { IUser } from "pages/board"

const BoardFooter = ({ user }: { user: IUser }) => {
	return (
		<S.Footer>
			<S.SubTitle>Obrigado por apoiar este projeto</S.SubTitle>
			<S.Wrap>
				<FiClock size={20} color="#FFF" />
				<S.Time>
					Ùltima doação foi{" "}
					{formatDistance(new Date(user.lastDonate), new Date(), {
						locale: ptBR
					})}
				</S.Time>
			</S.Wrap>
		</S.Footer>
	)
}

export default memo(BoardFooter)
