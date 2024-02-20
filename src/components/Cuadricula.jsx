import Cripto from "./cripto/Cripto";
import useAxios from "../hooks/useAxios";
import "./Cuadricula.css";

const Cuadricula = () => {

	const [criptos, cargando] = useAxios(`assets`);
	
	if(cargando) return <span>Cargando...</span>
	
	return (
		<div className="app-container">
			<h1>Lista de criptomonedas</h1>
			<div className="cripto-container">
				{
					criptos && (
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
					)
				 }
			</div>
		</div>
		
	)
}

export default Cuadricula;

