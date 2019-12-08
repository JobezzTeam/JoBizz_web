import React, { Component, useState, useRef, useEffect } from 'react'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileStoreButton from 'react-mobile-store-button';
import Login from './Login'
import Register from './Register'
import UserPage from './UserPage/UserPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { MDBBtn } from "mdbreact";
import './StyleLanding.css'
import './Style.css'
import Recruteur from './Recruteur/Recruteur';
import './home.css'
import Navi from './Navbar'
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import back from "../media/Image_Paris_Pins.png"
import corner from "../media/Rect-blue.png"

function Presentation() {
    return (
        <div>
            <section className="jumbotron">
                <div class="row posi">
                    <div class="col">
                        <img src={back} />
                    </div>
                    <div class="col envi">
                        <h1 font-weight-bold>Découvrez.</h1>
                        <h1 className="font-weight-bold">Une nouvelle méthode.</h1>
                        <h1 className="font-weight-bold">Recherche d'emplois.</h1>
                        <img class="rect" src={corner} />
                        <div class="row" style={{marginTop: '30%'}}>
                            <h2 className="testee font-weight-bold">En savoir plus.</h2>
                            <Link to="/Login"><a href="something" class="button3">Commencer</a></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Section2/>
            <Section3/>
            <Footer/>
        </div>
    )
}

class LandingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <Navi/>
                <Router>
                    <Route exact path="/" component={Presentation}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/UserPage" component={UserPage}/>
                    <Route path="/Recruteur" component={Recruteur}/>
                </Router>
            </div>
        );
    }
}

export default LandingPage;
