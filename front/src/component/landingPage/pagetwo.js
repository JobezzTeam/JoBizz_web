import React from 'react';
import styled from 'styled-components'

function PageTwo() {
    return(
        <ContainerOne>
            <Background src={require('./ressources/Fleche.png')}/>
            <ImageIphone src={require('./ressources/ImageIphone.png')}></ImageIphone>
            <ContainerText>
                <h1><strong>JoBizz c'est quoi ?</strong></h1><br/><br/>
                <p><strong>JoBizz est une plateforme qui vous permettra de trouver des extras, des jobs saisonnier et des jobs dans l'urgence autour de chez vous. <br></br> La carte vous permet d'accéder à toutes les offres disponibles autour de chez vous et postulez facilement et rapidement.</strong></p>
            </ContainerText>
        </ContainerOne>
    )
}

const ContainerOne = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const ImageIphone = styled.img`
    position: absolute;
    width: 50%;
    margin-top: 10%;
    left: 0%;
`

const ContainerText = styled.div`
    position: absolute;
    margin-top: 23%;
    right: 0;
    right: 5%;
    margin-left: 60%;
    font-family: 'Muli', sans-serif;
    text-align: left;
    h1 {
        font-size:3.5em;
        color: white;
    }
    p {
        font-size: 1.3em;
        color: white;
    }
`

export {PageTwo}
