import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = (endpoint) => {
	const API_URL = import.meta.env.VITE_API_URL
	const [data, setData] = useState()
	const [cargando, setCargando] = useState(false)
	useEffect(() => {
		const fetchData = async () => {
			try {
			setCargando(true)
			const data = await axios.get(`${API_URL}${endpoint}`)
			setData(data.data.data)
			} catch(e) {
				console.log(e)
			} finally {
				setCargando(false)
			}
		}
		fetchData()
	}, [])
	return [data, cargando]
}

export default useAxios

