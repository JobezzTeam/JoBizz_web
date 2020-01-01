import React, { Component } from 'react'
// import for MDBREACT ALL
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"
import './section2.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import iphone from '../media/iphone_xpng.png'
import macbook from '../media/macbook.png'
// import logo1 from '../media/chip.png'
// import logo2 from '../media/businessman.png'
// import logo3 from '../media/light-bulb.png'

class ntest extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#1F1B24"}}>
                <MDBContainer  className="container-size">
                    <MDBRow>
                        <h2  class="titles font-weight-bold">  Une nouvelle méthode de recherche</h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="7">
                            <p class="text font-weight-bold">Jobizz, c'est une platforme mobile & web permettant d'aider des personnes à trouver des emplois saisonnier
                            ainsi que des emplois d'urgences, dans tous les secteurs d'activités.
                            </p>
                        </MDBCol>
                        <MDBCol size="5">
                            <img class="iphone" src={iphone} />
                            <img class="macbook" src={macbook} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="row-pos">


                    </MDBRow>
            </MDBContainer>
            </div>
        );
    }
}


export default ntest
