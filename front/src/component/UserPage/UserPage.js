import React, { Component, useState, useRef, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import "./UserPage.css"
import jwtDecode from 'jwt-decode'
import {MDBBtn, MDBTooltip} from "mdbreact"
import { Icon } from 'react-icons-kit'
import {mapPin} from 'react-icons-kit/fa/mapPin'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const Marker = (props) => {
    const {name, title,  price, desc, address} = props;
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
            name:'',
            desc: '',
            price: '',
            address:'',
            exlat: '',
            exlon: '',

            name1:'',
            desc1: '',
            price1: '',
            address1:'',
            exlat1: '',
            exlon1: '',
            show : false
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
                console.log("------" + location.coords.latitude);
                console.log("-----" + location.coords.longitude);
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
                    this.setState({
                        exlat: res[0].lat,
                        exlon: res[0].lon,
                        name: res[0].title,
                        desc: res[0].desc,
                        price: res[0].price,
                        address: res[0].address,


                        exlat1: res[1].lat,
                        exlon1: res[1].lon,
                        name1: res[1].title,
                        desc1: res[1].desc,
                        price1: res[1].price,
                        address1: res[1].address
                    })
                console.log(res[0].lat);
                console.log(res[0].lon);

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
                            <ul style={ulStyle} type="button" className="list-group">Compte </ul>
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
                                <Marker
                                    title={this.state.name}
                                    desc={this.state.desc}
                                    price={this.state.price}
                                    address={this.state.address}
                                    lat={this.state.exlat}
                                    lng={this.state.exlon}
                                    show={this.state.show}
                                />
                                <Marker
                                    title={this.state.name1}
                                    desc={this.state.desc1}
                                    price={this.state.price1}
                                    address={this.state.address1}
                                    lat={this.state.exlat1}
                                    lng={this.state.exlon1}
                                />
                                <Marker
                                    title={this.state.name1}
                                    desc={this.state.desc1}
                                    price={this.state.price1}
                                    address={this.state.address1}
                                    lat={this.state.exlat1}
                                    lng={this.state.exlon1}
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

