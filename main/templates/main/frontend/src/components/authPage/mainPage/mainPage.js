import React from "react"
import './mainPage.css'
import { Container } from "../container/container"


export class MainPage extends React.Component {
    
    render() {

        return (
            <main className="outer">
                <div className="bg">
                    <div className="pageWrapper">
                        <Container>
                        </Container>
                    </div>
                </div>
            </main>
        )
    }
}
