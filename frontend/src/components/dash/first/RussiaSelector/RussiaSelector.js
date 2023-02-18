import React from "react";
import RussiaMap from "../RussiaMap/map";
import "./RussiaSelector.css"
import { PopUp } from "../PopUp/PopUp";

export class RussiaSelector extends React.Component {
    constructor(props) {
        super(props)
        this.selectRegion = this.selectRegion.bind(this)
        this.displayPopUp = this.displayPopUp.bind(this)
        this.hidePopUp = this.hidePopUp.bind(this)
        this.hoverRegion = this.hoverRegion.bind(this)
        this.updateMousePos = this.updateMousePos.bind(this)
        this.state = {
            selectedRegion : "Омская область",
            popUpVisible : false,
            hoveredRegion : "",
            mousePos : [0,0]
        }
    }

    selectRegion = (value) => {
        this.setState({selectedRegion : value})
    }

    displayPopUp = () => {
        this.setState({popUpVisible : true})
    }

    hidePopUp = () => {
        this.setState({popUpVisible : false})
    }

    hoverRegion = (value) => {
        this.setState({hoveredRegion : value})
    }

    updateMousePos = (value) => {
        this.setState({mousePos : value})
    }

    render() {
        return(
            <>
                <div style={{position: "absolute"}}>{this.state.selectedRegion}</div>
                <RussiaMap
                    updateRegion={this.selectRegion}
                    displayPopUp={this.displayPopUp}
                    hidePopUp={this.hidePopUp}
                    hoverRegion={this.hoverRegion}
                    updateMousePos={this.updateMousePos}
                    selectedRegion={this.state.selectedRegion}
                />
                <PopUp name={this.state.hoveredRegion} visible={this.state.popUpVisible} 
                    posX={this.state.mousePos[0]} 
                    posY={this.state.mousePos[1]}/>
            </>
        )
    }
}
