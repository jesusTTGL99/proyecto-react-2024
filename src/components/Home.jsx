import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>Hola, bienvenido a EdMarket</h1>
			<span>Conoce las 100 criptos mas usadas</span>
			<Link to="/criptomonedas">Ver criptomonedas</Link>
		</>
	)
}

export default Home;
