import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput} from "mdbreact";
import Navi from '../Navbar'

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
                console.log(response);
                if (response.status === 200) {
                    this.setState({isRegister:true});
                }
                else if (response.status === 400) {
                    this.setState({isRegister: false});
                }
            }, (error) => {
                console.log(error);
            });
    }
    render() {
        const { isRegister } = this.state;
        if (isRegister === true) {
            return( <Redirect to={"/LoginRecruteur"}/>);
        }
        return(
            <div>
                <Navi/>
                <form className="text-center p-5" action="#!">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <form onSubmit={this.handleSubmit}>
                                    <h1><strong>Sign up</strong></h1>
                                    <MDBInput
                                        size="lg"
                                        label="nom"
                                        className="form-control"
                                        value={this.state.nom}
                                        onChange={this.onChangeNom}
                                    />
                                    <MDBInput
                                        size="lg"
                                        label="Prenom"
                                        value={this.state.prenom}
                                        className="form-control"
                                        onChange={this.onChangePrenom}
                                    />
                                    <MDBInput
                                        size="lg"
                                        label="Email"
                                        type="email"
                                        value={this.state.email}
                                        className="form-control"
                                        onChange={this.onChangeEmail}
                                    />
                                    <MDBInput
                                        size="lg"
                                        label="company"
                                        value={this.state.company}
                                        className="form-control"
                                        onChange={this.onChangeCompany}
                                    />
                                    <MDBInput
                                        size="lg"
                                        label="Password"
                                        type="password"
                                        value={this.state.password}
                                        className="form-control"
                                        onChange={this.onChangePassword}
                                    />
                                    <div className="text-center mt-4">
                                        <MDBBtn color="info" type="submit">
                                            Register
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="col envi">
                                    <h1 font-weight-bold>Inscrivez vous</h1>
                                    <h1 className="font-weight-bold">Le meilleur JoBeur</h1>
                                    <h1 className="font-weight-bold">Rapide.</h1>
                                    <h1 className="font-weight-bold">Autour de vous</h1>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </form>
            </div>
        );
    }
}
export default RegisterRecruteur;
