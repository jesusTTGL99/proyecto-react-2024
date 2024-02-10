import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {

	const API_URL = import.meta.env.VITE_API_URL;

	const [criptos, setCriptos] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(`${API_URL}assets`);
				setCriptos(data.data.data);
			} catch(e) {
				console.log(e);
			}
		}
		fetchData();
	}, []);
	
	if(!criptos) return <span>Cargando...</span>
	
	return (
		<>
			<h1>Lista de criptomonedas</h1>
			<ol>
				{
				 	criptos.map(({ id, name, priceUsd }) => ( 
						<li key={id}>Nombre: { name } Precio: { priceUsd }</li>
					))
				 }
			</ol>
		</>
		
	)
}

export default App;

