import React from "react";
import './Header.css'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {} = this.props

        return (
            <header className="loaded">this is the header</header>
        )
    }
}
