import React, { Component } from 'react'
import axios from "axios";
import Navi from "../Home/Navbar";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import {
    Link
} from "react-router-dom";

import { Header } from '../landingPage/header'

const style = {
    backgroundColor: "#4095c6",
    color : "white"
}
class RecruteurLogin extends Component {
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
        axios.post("http://localhost:4000/recruteur/Login", newUser)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/HomeRecruteur')
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header/>
                <form className="text-center p-5" action="#!">
                    <MDBContainer className="ContainLogin">
                        <MDBRow>
                            <MDBCol md="6">
                                <form onSubmit={this.handleSubmit}>
                                    <p className="h4 text-center mb-4"><strong>Connexion Recruteur</strong></p>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">e-mail</label>
                                        <input
                                            type="email"
                                            id="exampleInput"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <MDBBtn color="info" type="submit">Login</MDBBtn>
                                        <div>{this.state.data}</div>
                                    </div>
                                    <div>
                                        <Link to='/RegisterRecruteur'><MDBBtn color="info" type="button">S'enregistrer</MDBBtn></Link>
                                    </div>
                                    <br/>
                                </form>
                            </MDBCol>
                            <MDBCol md="6">
                                <h1 font-weight-bold>Retrouvez</h1>
                                <h1 className="font-weight-bold">Des Jobeur partout</h1>
                                <h1 className="font-weight-bold">Rapidement</h1>
                                <h1 className="font-weight-bold">Efficace</h1>
                                <h1 className="font-weight-bold">Dans l'urgence</h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </form>
            </div>
        )
    }
}

export default RecruteurLogin;
