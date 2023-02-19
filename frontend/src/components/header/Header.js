import React from "react";
import './Header.css'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {} = this.props

        return (
        <div className="header-container">
            <header className="loaded">Росмолодёжь Statistics</header>
        </div>
        )
    }
}
