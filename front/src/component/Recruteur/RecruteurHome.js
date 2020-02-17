import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
import {
    Link,
} from "react-router-dom";


class RecruteurHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            sideNavLeft: false
        }
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
            company : decode.company
        })
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        return (
            <div>
            <MDBNavbar color="indigo" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">{this.state.company}</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav style={{marginLeft : '85%'}}>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem><MDBBtn style={{color: "white", marginTop: "25%"}} onClick={this.logout}>Logout</MDBBtn>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
                <MDBBtn>
                    <Link to="/sendAnnonce"><p>Poster une annonces</p></Link>
                </MDBBtn>
          </div>

        )
    }
}

export default RecruteurHome;
