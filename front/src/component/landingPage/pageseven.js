import React from 'react';
import styled from 'styled-components'

function PageSeven() {
    return(
        <Contain>
            <ContainPage>
                <Title>N’attendez plus, JoBizz-ez !</Title>
                <Description>Pour commencer à utiliser la plateforme,<br></br>vous allez devoir créer un compte utilisateur.</Description>
            </ContainPage>
            <StartButton>Commencer</StartButton>
        </Contain>
    )
}

const Contain = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #262635;
`

const ContainPage = styled.div`
    display: list-items;
    height: 30%;
    width: 55%;
    justify-content: space-around;
    align-items: flex-start;
    text-align: center;
    padding-top: 1%;
  
    div:nth-child(1) {
  	    align-self: center;
    }
`

const Title = styled.h1`
    font-family: Muli;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.67;
    color: #ffffff;
`

const Description = styled.p`
    font-family: Muli;
    font-size: 1em;
    font-weight: 400;
    color: #66667e;
`


const StartButton = styled.button`
    width: 15%;
    margin-left: 65%;
    box-shadow: 0 0 20px 0 #bd11fa;
    background: linear-gradient(294deg, #bd11fa, #46c2ff);;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    outline: none;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border-style: none;
`

export {PageSeven}