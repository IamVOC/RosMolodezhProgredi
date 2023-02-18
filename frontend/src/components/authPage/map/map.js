import React from "react";
import './map.css'
import { Russia } from "./russia";

export default class Map extends React.Component {

    render() {
        return (
            <div className="map-wrapper">
                <Russia />
            </div>
        )
    }
}
