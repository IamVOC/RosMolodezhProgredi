import React from "react"
import './container.css'
import { AuthBar } from "../authBar/authBar"
import Map from "../map/map"

export class Container extends React.Component {

    render() {
        return (
            <div className="container">
                <AuthBar />
                <Map />
            </div>
        )
    }
}