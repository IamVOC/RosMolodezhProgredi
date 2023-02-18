import React from "react";
import './map.css'
import { Russia } from "./russia";

export default class RussiaMap extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="russia-map-wrapper">
                <Russia 
                    updateRegion={this.props.updateRegion}
                    displayPopUp={this.props.displayPopUp}
                    hidePopUp={this.props.hidePopUp}
                    hoverRegion={this.props.hoverRegion}
                    updateMousePos={this.props.updateMousePos}
                    selectedRegion={this.props.selectedRegion}/>
            </div>
        )
    }
}
