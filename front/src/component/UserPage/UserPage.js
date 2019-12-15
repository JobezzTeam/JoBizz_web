import React, { Component} from 'react'
import GoogleMapReact from 'google-map-react';
import "./UserPage.css"
import jwtDecode from 'jwt-decode'
import {MDBBtn} from "mdbreact"
import { Icon } from 'react-icons-kit'
import {mapPin} from 'react-icons-kit/fa/mapPin'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Profile from "./Profile";


const Marker = (props) => {
    const {title,  price, desc, address} = props;
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3" style={{color:"black"}}><strong>{title}</strong></Popover.Title>
            <Popover.Content>
                <p>{desc}</p>
                <p> Rénumération: {price}</p>
                <p>{address}</p>
            </Popover.Content>
        </Popover>
    );
    return (
        <div style={{height: "50px", width: "50px"}}>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <div style={{ color: 'red' }}>
                    <Icon size={20} icon={mapPin}/>
                </div>
            </OverlayTrigger>

        </div>
    )
}

const Perso = (props: any) => {
    const { color, name, id } = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            />
            <div className="pulse" />
        </div>
    );
};

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            latMe: '',
            lonMe: '',
            data : []
        };
        this.logout = this.logout.bind(this);
    }


    logout(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    componentDidMount() {
        const tokken = localStorage.token;
        const decode = jwtDecode(tokken);

        this.setState({
            prenom : decode.prenom,
            nom : decode.nom
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(location => {
                this.setState({
                    latMe: location.coords.latitude,
                    lonMe: location.coords.longitude
                })

            });
        }
        fetch("http://localhost:4000/annonce/getJob")
        .then(response => response.json())
            .then((res) => {
                console.log(res);
                this.setState({data : res});
            })
    }

    render() {
        var divStyle = {
            // backgroundColor: 'red',
            padding: "10%",
            textAlign: 'center'
        };
        var ulStyle = {
            color: "white",
            padding: "5%",
            marginBottom: "15%",
            fontSize: "120%"
        }
        return (
            <div className="main">
                <div id="viewport">
                    <div id="sidebar">
                        <header>
                            <p style={{color: "white"}}><strong>Welcome {this.state.nom}</strong></p>
                        </header>
                        <div style={divStyle}>
                                <Link to="/Profile"><ul style={ulStyle} type="button" className="list-group">Compte </ul></Link>
                                <ul style={ulStyle} type="button" className="list-group">Contrat 🆚</ul>
                                <ul style={ulStyle} type="button" className="list-group">Travaux effectué ✅</ul>
                                <ul style={ulStyle} type="button" className="list-group">Paramètre </ul>
                            <MDBBtn style={{color: "white", marginTop: "25%"}} onClick={this.logout}>Logout</MDBBtn>
                        </div>
                    </div>
                    <div style={{ height: '100vh', width: '125%' }}>
                        <div className="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDW41KMRzwFp4m7Uht_53PiPHv0LSqXq5Y' }}
                                center={{lat: this.state.latMe, lng: this.state.lonMe}}
                                defaultZoom={14}
>
                                <Perso
                                    lat={this.state.latMe}
                                    lng={this.state.lonMe}
                                    text="My Marker"
                                    color="blue"
                                />
                                {this.state.data.map(item => {
                                    return (
                                        <Marker
                                            lat={item.lat}
                                            lng={item.lon}
                                            title={item.title}
                                            desc={item.desc}
                                            price={item.price}
                                            address={item.address}
                                        />
                                    );
                                })}
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
                <Router>
                    <Route path="/Profile" component={Profile}/>
                </Router>
            </div>
        );
    }
}

