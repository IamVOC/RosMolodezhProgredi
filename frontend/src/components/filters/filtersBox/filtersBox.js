import React from "react";

export class FiltersBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened : false,
            currentSelected : ["all"],
        }
    }
    render() {
        const {opened} = this.state
        const {title} = this.props
        return(
            <div className="filters-box">

            </div>
        )
    }
}