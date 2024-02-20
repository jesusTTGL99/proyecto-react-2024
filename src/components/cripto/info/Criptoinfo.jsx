const Criptoinfo = 	({cripto}) => {
	return (
		<div className="info">
			<div className="main-info">
				<span className="ranking">Ranking: {cripto.rank}</span>
				<h1>{cripto.name}</h1>
				<span className="symbol">{cripto.symbol}</span>
			</div>
			<div className="details">
				<ul>
					<li className="detail">
						<span className="label">Precio: </span>
						<span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
					</li>
					<li className="detail">
						<span className="label">MaxSupply: </span>
						<span>{parseFloat(cripto.maxSupply).toFixed(3)}</span>
					</li>
					<li className="detail">
						<span className="label">Market Cap (USD): </span>
						<span>{parseFloat(cripto.marketCapUsd).toFixed(3)}</span>
					</li>
					<li className="detail">
						<span className="label">Volumen (USD - 24 Hrs.): </span>
						<span>{parseFloat(cripto.volumeUsd24Hr).toFixed(3)}</span>
					</li>
					<li className="detail">
						<span className="label">Variacion (24 Hrs.): </span>
						<span>{parseFloat(cripto.changePercent24Hr).toFixed(3)}</span>
					</li>
					<li className="detail">
						<span className="label">Vwap (24 Hrs.): </span>
						<span>{parseFloat(cripto.vwap24Hr).toFixed(3)}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Criptoinfo

