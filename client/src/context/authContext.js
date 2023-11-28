import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

/*children represent our components that we want to wrap with this context provider(app)*/
export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    /*
     * makes a POST request to "/auth/login" with the provided inputs
     * and sets the currentUser state with the response data.
     */
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:5001/auth/login", inputs); 
        setCurrentUser(res.data);
    };

    /*
     *  makes a POST request to "/auth/logout" and sets the currentUser state to null.
     */
    const logout = async (inputs) => {
        await axios.post("http://localhost:5001/auth/logout"); 
        setCurrentUser(null);
    };

    /*
     * Whenever the currentUser state changes, the useEffect stores the updated user object in localStorage
     * to update local storage each time we change the user
     */
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};