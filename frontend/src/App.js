import React from "react";
import "./style/style.scss"
import { BrowserRouter } from "react-router-dom";
import DefineRoute from "./route";

export default function App() {
    return <BrowserRouter>
        <DefineRoute />
    </BrowserRouter>
}