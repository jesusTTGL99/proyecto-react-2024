import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import "./Menu.css";

const Menu = () => {

	const user = useContext(UserContext)
	
	return (
		<nav className="main-menu">
			<ul>
				<li><NavLink to="/">Inicio</NavLink></li>
				<li><NavLink to="/criptomonedas">Lista de criptomonedas</NavLink></li>
				<li><NavLink to="/perfil">Perfil de { user.name }</NavLink></li>
			</ul>
		</nav>
	)
}

export default Menu;

