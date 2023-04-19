import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const RegisterForm = props => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const socket = io('https://eow-werewolft-be.onrender.com/');

    const handleInput = e => {
        setUserName(e.target?.value)
    }

    const handleSubmit = async () => {
        localStorage.setItem('username', username)
        await socket.emit('user_register', { message: username });
        navigate("/")  
    }

    return <div>
        <div className="m-auto p-5 w-4/12 mt-36 rounded-lg bg-white drop-shadow-lg text-center flex flex-col gap-6">
            <h1 className="text-3xl">Register form</h1>
            <div>
                <input onChange={handleInput} className="border border-gray-200 rounded-lg w-6/12 p-3 outline-none" />
            </div>
            <div>
                <button onClick={handleSubmit} className="bg-blue-600 p-2 px-10 rounded-lg text-white hover:bg-blue-400 transition-all">Join in !</button>
            </div>
        </div>
    </div>
}

export default RegisterForm