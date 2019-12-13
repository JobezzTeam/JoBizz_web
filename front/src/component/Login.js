import React, { Component, useState, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import UserPage from './UserPage/UserPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBInput } from "mdbreact";
import Navi from './Navbar'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            isLogin: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post("http://localhost:4000/users/login", newUser)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/UserPage')
            }, (error) => {
                console.log(error);
            });
    }
    receiveData(data) {
        this.setState({data});
    }

    render() {
        return (
            <div className="login">
                <Navi/>
            <form className="text-center p-5" action="#!">
                <MDBContainer className="ContainLogin">
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center mb-4"><strong>Sign in</strong></p>
                                <MDBInput
                                    size="lg"
                                    label="email"
                                    type="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                                <br/>
                                <MDBInput
                                    size="lg"
                                    label="password"
                                    type="password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                                <div className="text-center mt-4">
                                    <MDBBtn color="info" type="submit">Login</MDBBtn>
                                    <div>{this.state.data}</div>
                                </div>
                                <br/>
                                <div>
                                    <Link to='/Register'><MDBBtn color="info" type="button">S'enregister</MDBBtn></Link>
                                </div>
                                <div>
                                    <Link to='/LoginRecruteur'><MDBBtn color="info" type="button">Vous êtres recruteur ?</MDBBtn></Link>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <h1 font-weight-bold>Découvrez.</h1>
                            <h1 className="font-weight-bold">Inscription gratuite</h1>
                            <h1 className="font-weight-bold">Job saisonniers.</h1>
                            <h1 className="font-weight-bold">Des Extras.</h1>
                            <h1 className="font-weight-bold">Proche de chez vous.</h1>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
            </div>
        )
    }
}

export default Login;
