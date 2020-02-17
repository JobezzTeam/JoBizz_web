import React, { Component} from 'react'
import GoogleMapReact from 'google-map-react';
import "./UserPage.css"
import jwtDecode from 'jwt-decode'
import {MDBBtn} from "mdbreact"
import { Icon } from 'react-icons-kit'
import {mapPin} from 'react-icons-kit/fa/mapPin'
import {
    Popover,
    Navbar
} from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
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
            <MDBBtn style={{marginLeft:"15%", Width:"3%"}}>Postuler</MDBBtn>
        </Popover>
    );
    return (
        <div style={{height: "50px", width: "50px"}}>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <div style={{ color: 'red' }}>
                    <Icon size={23} icon={mapPin}/>
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
const styleMap =  [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#263c3f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6b9a76"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#38414e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#212a37"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9ca5b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#1f2835"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f3d19c"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2f3948"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#515c6d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#17263c"
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

const Sidebar = () => {
    return(
               <Router>
                <Navbar expand="lg" style={{backgroundColor : "#21212E"}} variant="dark">
                        <Navbar.Brand>
                            <strong style={NavStyle2}>JoBizz.</strong>
                            <Link to={"UserPage"}><a style={NavStyle}>Map</a></Link>
                            <Link to={"Profil"}><a style={NavStyle}>Profil</a></Link>
                            <Link to={"Missions"}><a style={NavStyle}>Mes Missions</a></Link>
                            <Link to={"/Paramètre"}><a style={NavStyle}>Paramètre</a></Link>
                        </Navbar.Brand>
                </Navbar>
                <Switch>
                    <Route path='/UserPage' component={UserPage}></Route>
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
                    <div style={{ height: '100vh', width: '205%' }}>
                        <div className="map">
                            <GoogleMapReact
                                options={{
                                    styles: styleMap,
                                }}
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

