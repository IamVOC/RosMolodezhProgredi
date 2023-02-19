import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../authPage/mainPage/mainPage";
import DashPage from "../DashPage/DashPage";

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/dash" element={<DashPage />} />
                </Routes>
            </BrowserRouter>
        </> 
    )
}
