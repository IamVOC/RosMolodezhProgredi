import React from "react";
import './PopUp.css'

export class PopUp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div 
            className={this.props.visible ? "regionName visible" : "regionName invis"}
            style={{transform: `translate(${this.props.posX + 20}px, ${this.props.posY + 20}px)`}}
            >{this.props.name}</div>
        )
    }
}