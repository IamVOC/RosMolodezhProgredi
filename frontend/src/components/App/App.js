import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../authPage/mainPage/mainPage";
import DashPage from "../DashPage/DashPage";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }
    
    render() {
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
}
