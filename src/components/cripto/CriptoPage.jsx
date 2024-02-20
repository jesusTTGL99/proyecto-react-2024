import CriptoHistorial from "./info/CriptoHistorial";
import Criptoinfo from "./info/Criptoinfo";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import "./CriptoPage.css";

const CriptoPage = () => {
	const params = useParams();
	const [cripto, cargandoCripto] = useAxios(`assets/${params.id}`);
	const [history, cargandoHistory] = useAxios(`assets/${params.id}/history?interval=d1`);

	if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>
	
	return (
		<div className="cripto-page-container">
			{ cripto && (<Criptoinfo cripto={cripto} />) }
			{ history && (<CriptoHistorial history={history} />) }
		</div>
	)
}

export default CriptoPage;

