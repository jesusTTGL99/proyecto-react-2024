import { useState, useEffect } from "react";
import axios from "axios";
import Cripto from "./cripto/Cripto";
import "./Cuadricula.css";

const Cuadricula = () => {

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
		<div className="app-container">
			<h1>Lista de criptomonedas</h1>
			<div className="cripto-container">
				{
				 	criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => ( 
						<Cripto
							key={id}
							name={name}
							priceUsd={priceUsd}
							symbol={symbol}
							changePercent24Hr={changePercent24Hr}
							id={id}
						/>
					))
				 }
			</div>
		</div>
		
	)
}

export default Cuadricula;

