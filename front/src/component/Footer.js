import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"
import './footer.css'
import { MDBContainer, MDBRow, MDBCol, MDBFooter} from "mdbreact";

const Footer = () => {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
            </MDBCol>
            <MDBCol md="6">
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} A propos de nous <a href="https://www.MDBootstrap.com"> JoBezz </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }  

export default Footer;
