import React from "react";
import './map.css'
import fake from '../../../img/fake.png'

export default class Map extends React.Component {

    render() {
        return (
            <div className="map-wrapper">
                <img src={fake} />
            </div>
        )
    }
}