import { createContext, useEffect, useState } from 'react'
import { usersList } from '../assets/users.js'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    // useState for userData
    const user = localStorage.getItem("userData")
    const activeUser = user ? JSON.parse(user) : []
    const [userData, setUserData] = useState(activeUser)
    const [users, setUsers] = useState(usersList)

    // Update userData on localStorage.
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData))
    }, [userData])

    // Logout userData
    function logoutUser() {
        setUserData(null)
        localStorage.setItem("userData", null)
    }

    // Login userValidation
    function userValidation(email, password) {
        const user = users.find(users => users.email === email)
        if (user) {
            localStorage.setItem("userData", JSON.stringify(user))
            setUserData(user)
            return true
        } else {
            return false
        }
    }

    return (
        <UserContext.Provider
            value={
                {
                    userData,
                    setUserData,
                    userValidation,
                    logoutUser
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
