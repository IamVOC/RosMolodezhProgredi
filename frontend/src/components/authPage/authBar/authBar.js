import React from "react";
import './authBar.css'
import { Link } from "react-router-dom";


export class AuthBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            enterPressed : false
        }
    }

    render() {
        const pressed = this.state.enterPressed
        return (
            <div className="authBar-content-wrapper">
                <div className="authBar-content">
                    <div className="authBar-desc-wrapper">
                        <h1>Росмолодёжь Statistics</h1>
                        <p className="authBar-desc">Сервис для сбора, аналитики и визуализации данных.</p>
                    </div>
                    <div className="authBar-input authBar-login">
                        <input
                        placeholder="..."
                        />
                    </div>
                    <div className="authBar-input authBar-password">
                        <input type="password"
                        placeholder="..."
                        />
                    </div>
                    <Link to="/dash" className="authBar-link"><button className={pressed ? "authBar-enter authBar-enter-pressed" : "authBar-enter"}
                    onMouseDown={() => this.setState({enterPressed : true})}
                    onMouseUp={() => this.setState({enterPressed : false})}
                    onMouseLeave={() => this.setState({enterPressed : false})}
                    ><span className="authBar-enter-text">Войти</span></button></Link>
                </div>
            </div>
        )
    }
}
