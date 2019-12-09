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
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

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
            <form className="text-center border border-light p-5" action="#!">
                <MDBContainer className="ContainLogin">
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center mb-4">Sign in</p>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                                <br/>
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="defaultFormLoginPasswordEx"
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
                                    <Link to='/Recruteur'><MDBBtn color="info" type="button">Vous êtres recruteur ?</MDBBtn></Link>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
            </div>
        )
    }
}

export default Login;
