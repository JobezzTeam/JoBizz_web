import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid';

function PageFour() {
    return(
        <ContainerSection>
            <Background src={require('./ressources/PageTwo.png')}/>
            <Container>
                <Row style={{marginTop: '15%'}}>
                    <Title>Une nouvelle manière de chercher des Jobs.</Title>
                    <Description>Tu es un étudiant ?<br/><br/> en recherche d'emplois ? <br/><br/> Dans le besoin urgent ?<br/><br/>N'attend plus, Jobizz et tout les jobs seront à toi !</Description>
                </Row>
            </Container>
        </ContainerSection>
    )
}

const ContainerSection = styled.div`
    width: 0%;
    height: 100vh;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const ButtonStart = styled.button`
    width: 10%;
    box-shadow: 0 0 20px 0 #bd11fa;
    background: linear-gradient(294deg,#bd11fa,#46c2ff);
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    margin-left: 1%;
    margin-top: 32%;
    position: absolute;
    outline: none;
    font-weight: bold;
    border-style: none;
    margin-left: 36%;
    font-size: 1em;

    :active {
        background-color: #bd11fa;
    }
`

const Button = styled.button`
    background-color: #00ec98;
    width: 10%;
    color: black;
    font-family: 'Montserrat',sans-serif;
    font-size: 0.8em;
    position: absolute;
    font-weight: bold;
    text-align: center;
    padding: 0.5%;
    outline: none;
    border-style: none;
    margin-top: 18%;
    right: 38%;
`

const Title = styled.h1`
    font-size: 2.3em;
    position: absolute;
    font-weight: bold;
    text-align: left;
    color: #46C2FF;
    margin-top: 12%;
    right: 7%;
`

const Description = styled.h1`
    font-size: 1.8em;
    position: absolute;
    font-weight: bold;
    text-align: left;
    color: white;
    margin-top: 17%;
    right:10%;
`

export {PageFour}
