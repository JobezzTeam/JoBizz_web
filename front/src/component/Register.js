import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Navi from './Navbar'
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput} from "mdbreact";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            email: '',
            password: '',
            isRegister:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

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
    handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            prenom : this.state.prenom,
            nom: this.state.nom,
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);
        axios.post("http://localhost:4000/users/register", newUser)
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
            return( <Redirect to={"/Login"}/>);
        }
        return(
            <div>
            <Navi/>
            <form class="text-center border border-light   p-5" action="#!">
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
                            <div class="col envi">
                                <h1 font-weight-bold>Inscription.</h1>
                                <h1 className="font-weight-bold">Gratuite</h1>
                                <h1 className="font-weight-bold">Job saisonniers.</h1>
                                <h1 className="font-weight-bold">Des Extras.</h1>
                                <h1 className="font-weight-bold">Proche de chez vous.</h1>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
            </div>
        );
    }
}
export default Register;
