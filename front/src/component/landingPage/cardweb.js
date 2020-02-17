import React from 'react';
import styled from 'styled-components'

function CardWeb(props) {
    return(
        <CardContainer>
            <Contain></Contain>
            <Div>
                <Icon src={require('./pencil-case-1.png')}/>
            </Div>
            <ContainText>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </ContainText>
        </CardContainer>
    )
}

const CardContainer = styled.div`
  width: 20%;
  height: 70%;
  border-radius: 3.5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.54);
  background-color: #20202c;
`

const Contain = styled.div`
    width: 100%;
    height: 10%;
`

const Div = styled.div`
    width: 100%;
    height: 35%;
    background-color: #39394d;
`
const Icon = styled.img`
    width: 15%;
    margin-left: 10%;
    margin-top: 7%;
`

const ContainText = styled.div`
    width: 100%;
    margin-left: 5%;
`

const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 2.39;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
`

const Description = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 0.8em;
font-weight: 300;
letter-spacing: normal;
text-align: left;
color: #66667e;
`

export { CardWeb }