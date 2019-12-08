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
            // <section>
            //     <div class="row position">
            //         <h1>Nos Technologies ✅</h1>
            //     </div>
            //     <div class="row title2">
            //         <h2>Trouvons notre prochain jobs ensemble ! 😶</h2>
            //     </div>
            //     <div class="container">
            //     <div class="card-deck">
            //     <div class="card mb-4">
            //         <div class="view overlay">
            //         <img class="card-img-top" alt="Card image cap" />
            //         <a href="#!">
            //             <div class="mask rgba-white-slight"></div>
            //         </a>
            //         </div>
            //         <div class="card-body">
            //         <h4 class="card-title">Technologie</h4>
            //         <p class="card-text">Explication of our Technologie</p>
            //         <button type="button" class="btn btn-light-blue btn-md">Read more</button>
            //         </div>
            //     </div>
            //     <div class="card mb-4">
            //         <div class="view overlay">
            //         <img class="card-img-top" alt="Card image cap" />
            //         {/* <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"/> */}
            //         <a href="#!">
            //             <div class="mask rgba-white-slight"></div>
            //         </a>
            //         </div>
            //         <div class="card-body">
            //         <h4 class="card-title">Jobs</h4>
            //         <p class="card-text">A lot of jobs a into your app.</p>
            //         <button type="button" class="btn btn-light-blue btn-md">Read more</button>
            //         </div>
            //     </div>
            //     <div class="card mb-4">
            //         <div class="view overlay">
            //         <img class="card-img-top" alt="Card image cap" />
            //         {/* <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"/> */}
            //         <a href="#!">
            //             <div class="mask rgba-white-slight"></div>
            //         </a>
            //         </div>
            //         <div class="card-body">
            //         <h4 class="card-title">Features</h4>
            //         <p class="card-text">Features in constant development for purpose a better tool.</p>
            //         <button type="button" class="btn btn-light-blue btn-md">Read more</button>
            //         </div>
            //     </div>
            //     </div>
            //     <div class="row test">
                    
            //         </div>
            //     </div>
            // </section>
                <MDBContainer className="container-size">
                    <MDBRow>
                        <h2 class="titles font-weight-bold">Tu veux JoBizz-er ?</h2>
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
                        <MDBCol size="3">
                            <h2 className="savoir font-weight-bold">En savoir plus.</h2>
                        </MDBCol>
                        <MDBCol size="3">
                            <a href="something" class="button3">Commencer</a>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        );
    }
}


export default ntest