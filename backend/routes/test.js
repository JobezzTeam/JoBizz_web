import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


const item = (props) => {
    const {image, name} = props;
     return (
         <MDBCol>
             <MDBCard style={{ width: "22rem" }}>
                 <MDBCardImage className="img-fluid" src={image} waves />
                 <MDBCardBody>
                     <MDBCardTitle>{name}</MDBCardTitle>
                 </MDBCardBody>
             </MDBCard>
         </MDBCol>
     )
}


class prophesee extends React.Component {
    constructor(props) {
        super(props);
        this.state {
            map = []
        }
    }


    render(){
        <div>
            <p></p>
        </div>
    }
}

