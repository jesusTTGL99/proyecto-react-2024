import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

const Login = () => {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		email: "",
		password: ""
	})
	
	const [cargando, setCargando] = useState(false)
	const [error, setError] = useState()

	const submit = async (e) => {
		try {
			e.preventDefault()
			setCargando(true)
			setError(null)
			const data = await axios.post(`https://reqres.in/api/login`, user)
			localStorage.setItem("tokenEDmarket", data.data.token)
			navigate("/")
		} catch(e) {
			console.log(e)
			setError(e.response.data.error)
		} finally {
			setCargando(false)
		}
	}
	
	if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

	return (
		<div className="login-container">
			<h1>Iniciar Sesion</h1>
			<form onSubmit={submit}>
				<div className="field">
					<label htmlFor="email">Email</label>
					<input 
						required
						type="email"
						name="email"
						onChange={(e) => {
							setUser({
								...user,
								email: e.target.value
							})
						}}
					/>
				</div>
				<div className="field">
					<label htmlFor="password">Password</label>
					<input
						required
						type="password"
						name="password"
						onChange={(e) => {
							setUser({
								...user,
								password: e.target.value
							})
						}}
					/>
				</div>
				<div className="submit">
					<input
						type="submit"
						value={cargando ? "cargando..." : "Ingresar"}
						className="link"
					/>
				</div>
			</form>
			{
				error && <span className="error">Error: {error}</span>
			}
		</div>
	)
}

export default Login
