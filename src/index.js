import './scss/app.scss'

import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/Header'

class Page extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>{this.props.title}</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Page title="Social Web" />, App);