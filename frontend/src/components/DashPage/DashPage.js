import React from "react";
import { Header } from "../header/Header";
import { RussiaSelector } from "../dash/first/RussiaSelector/RussiaSelector";
import { DashContainer1 } from "../dash/containers/container1";

export default function DashPage() {
    return (
        <>
            <Header />
            <RussiaSelector selectedFirst=""/>
            <DashContainer1 />
        </>
    )
}