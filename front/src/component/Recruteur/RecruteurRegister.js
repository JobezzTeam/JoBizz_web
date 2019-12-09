import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import sendAnnonce from './SendAnnonce'
import Navi from '../Navbar'

const style = {

}
class RegisterRecruteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            company: '',
            siret : '',
            password: '',
            isRegister:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
    }

    onChangePrenom(e) {
        this.setState({
            prenom: e.target.value
        })
    }
    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        })
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
    onChangeCompany(e) {
        this.setState({
            company : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const newRecruteur = {
            prenom : this.state.prenom,
            nom: this.state.nom,
            company :this.state.company,
            email: this.state.email,
            password: this.state.password
        };
        axios.post("http://localhost:4000/recruteur/Register", newRecruteur)
            .then((response) => {
                const obj = JSON.stringify(response.data);
                const res = JSON.parse(obj);
                if (res.status === 200) {
                    this.setState({isRegister:true});
                }
                else if (res.status === 400) {
                    this.setState({isRegister: false});
                }
            }, (error) => {
                console.log(error);
            });
    }
    render() {
        const { isRegister } = this.state;
        if (isRegister === true) {
            return( <Redirect to={"/SendAnnonce"}/>);
        }
        return(
            <div>
                <Navi/>
            <div class="row posi">
                <div class="col">
                            <form  class="text-center p-5" onSubmit={this.handleSubmit}>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Nom
                                </label>
                                <input
                                    placeholder="Nom"
                                    type="nom"
                                    name="nom"
                                    id="defaultFormRegisterNomEx"
                                    className="form-control"
                                    value={this.state.nom}
                                    onChange={this.onChangeNom}
                                    size="4"
                                />
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                    Prenom
                                </label>
                                <input
                                    placeholder="Prenom"
                                    type="prenom"
                                    name="prenom"
                                    value={this.state.prenom}
                                    id="defaultFormRegisterPrenomlEx"
                                    className="form-control"
                                    onChange={this.onChangePrenom}
                                />
                                <br/>
                                <label htmlFor="defaultFormRegisterCompanyEx" className="grey-text">
                                    Nom de l'entreprise
                                </label>
                                <input
                                    placeholder="entreprise"
                                    type="company"
                                    name="company"
                                    value={this.state.company}
                                    id="defaultFormRegisterCompanyEx"
                                    className="form-control"
                                    onChange={this.onChangeCompany}
                                />
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                    Your email or Company Email
                                </label>
                                <input
                                    placeholder="Type email"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    id="defaultFormRegisterEmailEx"
                                    className="form-control"
                                    onChange={this.onChangeEmail}
                                />
                                <br />
                                <label
                                    htmlFor="defaultFormRegisterPasswordEx"
                                    className="grey-text"
                                >
                                    Your password
                                </label>
                                <input
                                    placeholder="Type password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    id="defaultFormRegisterPasswordEx"
                                    className="form-control"
                                    onChange={this.onChangePassword}
                                />
                                <div className="text-center mt-4">
                                    <MDBBtn color="info" type="submit">
                                        Register
                                    </MDBBtn>
                                </div>
                            </form>
                </div>
                <div class="col envi">
                    <h1 font-weight-bold>Recrutez.</h1>
                    <h1 className="font-weight-bold">Trouvez le meilleur personnel</h1>
                    <h1 className="font-weight-bold">Rapidement</h1>
                    <h1 className="font-weight-bold">Facilement</h1>
                </div>
            </div>
            </div>
        );
    }
}
export default RegisterRecruteur;
