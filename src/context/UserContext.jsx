import { useState, useEffect, createContext } from "react"

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({})
	useEffect(() => {
		setUser({
			name: "Jesus Gonzalez",
			registered: "20/02/2024"
		})
	}, [])
	
	return (
		<UserContext.Provider value={user}>
			{ children }
		</UserContext.Provider>
	)
}

export { UserContext, UserContextProvider }
