import React, {Component, useState} from 'react'
import GoogleMapReact from 'google-map-react';
import "./UserPage.css"
import jwtDecode from 'jwt-decode'
import {MDBBtn, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer} from "mdbreact"
import { Icon } from 'react-icons-kit'
import {pin_2} from 'react-icons-kit/ikons/pin_2'
import {
    Popover,
    Navbar
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Profile from "./Profile";

function Marker(props) {
    const {title,  price, desc, address, color} = props;
    return (
        <div style={{display :"flex"}} className="m-5 p-5">
            <MDBPopover
                placement="left"
                popover
                clickable

            >
                <div style={{ color: 'red' }}>
                    <Icon size={35} icon={pin_2}/>
                </div>
                <div>
                    <MDBPopoverHeader><strong>{title}</strong></MDBPopoverHeader>
                    <MDBPopoverBody>
                        <p>{desc}</p>
                        <p> Rénumération: {price}</p>
                        <p>{address}</p>
                        <MDBBtn style={{marginLeft:"15%", Width:"3%"}}>Postuler</MDBBtn>
                    </MDBPopoverBody>
                </div>
            </MDBPopover>
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
const styleMap =  [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

var NavStyle = {
    margin: "10px",
    color : "white",
    fontSize: "1em",
    fontWeight: "bold"
};

var NavStyle2 = {
    margin: "40px",
    fontSize:"1.8em",
    color: "#46C2FF"
}

function Sidebar() {
    return (
               <Router>
                <Navbar expand="lg" style={{backgroundColor : "#21212E"}} variant="dark">
                        <Navbar.Brand>
                            <strong style={NavStyle2}>JoBizz.</strong>
                            <Link to={"/map"}><a style={NavStyle}>Map</a></Link>
                            <Link to={"/Profil"}><a style={NavStyle}>Profil</a></Link>
                            <Link to={"/Missions"}><a style={NavStyle}>Mes Missions</a></Link>
                            <Link to={"/Paramètre"}><a style={NavStyle}>Paramètre</a></Link>
                        </Navbar.Brand>
                </Navbar>
                <Switch>
                    <Route path='/map' component={UserPage}></Route>
                    <Route path="/Profile" component={Profile}></Route>
                </Switch>
            </Router>
        )
}

class UserPage extends Component {
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
        return (
            <div className="main">
                <div id="viewport">
                    <div style={{ height: '100vh', width: '150%' }}>
                        <div className="map">
                            <GoogleMapReact
                                options={{
                                    styles: styleMap,
                                }}
                                bootstrapURLKeys={{ key: 'AIzaSyD2XNH7m5g0Q7_JKkLYgog5uJ_hynG1IZ4' }}
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
            </div>
        );
    }
}

export default class HomeUser extends React.Component {
    render() {
        return (
            <Sidebar/>
        )
    }
}

