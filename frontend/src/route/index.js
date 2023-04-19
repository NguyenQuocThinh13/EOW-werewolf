import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
import RegisterForm from "../component/RegisterForm"
import Room from "../component/Room";

const DefineRoute = () => {
    const username = localStorage.getItem("username");
    const navigate = useNavigate()

    useEffect(() => {
        if (!username) {
            navigate("/register")
        }
    }, []);

    return <Routes>
        <Route path="/" element={<Room/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<h1 className="text-white">Not found</h1>} />
    </Routes>
}

export default DefineRoute;