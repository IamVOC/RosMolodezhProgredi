import React from "react";
import './authBar.css'


export class AuthBar extends React.Component {

    render() {
        return (
            <div className="authBar-content-wrapper">
                <div className="authBar-content">
                    <h1>Росмолодёжь Statistics</h1>
                    <p className="authBar-desc">Сервис для сбора, аналитики и визуализации данных.</p>
                    <div className="authBar-input authBar-login">
                        <input
                        placeholder="..."
                        />
                    </div>
                    <div className="authBar-input authBar-password">
                        <input
                        placeholder="..."
                        />
                    </div>
                    <div className="authBar-enter">Войти</div>
                </div>
            </div>
        )
    }
}