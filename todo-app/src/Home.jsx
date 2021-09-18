import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login from './Login'
import App from './App'
function home() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component= {Login}/>
                <Route exact path="/app" component= {App}/>
            </Switch>
        </Router>
    )
}

export default home
