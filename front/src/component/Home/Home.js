import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Register from './Register'
import RecruteurRegister from '../Recruteur/RecruteurRegister'
import HomeUser from '../UserPage/UserPage'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import RecruteurLogin from "../Recruteur/RecruteurLogin"
import RecruteurHome from "../Recruteur/RecruteurHome"
import sendAnnonce from "../Recruteur/SendAnnonce"
import {Page} from "../landingPage/page"

class LandingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <Router>
                    <Route exact path="/" component={Page}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/map" component={HomeUser}/>
                    <Route path="/RegisterRecruteur" component={RecruteurRegister}/>
                    <Route path="/LoginRecruteur" component={RecruteurLogin}/>
                    <Route path="/HomeRecruteur" component={RecruteurHome}/>
                    <Route path="/sendAnnonce" component={sendAnnonce}/>
                </Router>
            </div>
        );
    }
}

export default LandingPage;
