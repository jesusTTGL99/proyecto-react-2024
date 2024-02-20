import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Perfil = () => {

	const user = useContext(UserContext)

	return (
		<div>
			<h1>Perfil de {user.name}</h1>
			<div>
				<span>Usuario desde 20/02/2024</span>
			</div>
		</div>
	)
}

export default Perfil
