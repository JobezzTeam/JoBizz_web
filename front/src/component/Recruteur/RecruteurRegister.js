import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput} from "mdbreact";
import Navi from '../Navbar'

const style = {
    backgroundColor: "#4095c6",
    color : "white"
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
            <div style={style}>
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
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Nom</label>
                                        <input
                                            label="nom"
                                            className="form-control"
                                            value={this.state.nom}
                                            onChange={this.onChangeNom}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Prenom</label>
                                        <input
                                            label="Prenom"
                                            className="form-control"
                                            value={this.state.prenom}
                                            onChange={this.onChangePrenom}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Email</label>
                                        <input
                                            type="email"
                                            label="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Company</label>
                                        <input
                                            label="Company"
                                            className="form-control"
                                            value={this.state.company}
                                            onChange={this.onChangeCompany}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInput">Password</label>
                                        <input
                                            type="password"
                                            label="Password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                        />
                                    </div>
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}
export default RegisterRecruteur;
