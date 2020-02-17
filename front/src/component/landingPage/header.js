import React from 'react';
import styled from 'styled-components';
// import ActiveLink from './ActiveLink'

function Header({buttonStart = true}) {
    return(
        <ContainHeader buttonDl={buttonStart}>
            <LogoJobezzContainer>
                <a href='/'>
                    <LogoJobezz src={require('./ressources/Jobizz-Logo_Text-Ai.png')}>
                    </LogoJobezz>
                </a>
            </LogoJobezzContainer>
            <HeaderLink>
                <Nav>
                    <Li href='/home'><a>Accueil</a></Li>
                    <Li><a>À Propos</a></Li>
                    <Li><a>Télécharger</a></Li>
                    {buttonStart && <LilStart><a>Commencer</a></LilStart>}
                </Nav>
            </HeaderLink>
        </ContainHeader>
    )
}

const ContainHeader = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    background-color : #21212E;
`

const LogoJobezzContainer = styled.div`
    margin-left: 10%;
    cursor: pointer;
`

const LogoJobezz = styled.img`
    width: 70%;
    height: 50%;
    object-fit: contain;
`

const HeaderLink = styled.div`
    display: flex;
    list-style-type: none;
    margin: auto;
    margin-right: 10%;
`
const Nav = styled.nav`
    display: flex;
`

const Li = styled.li`
    margin: auto 22px;
    a {
        color: white;
        // color: ${props => !props.themewhite ? '#ffffff' : '#000000'};
        cursor: pointer;
        font-size: 20px;
        text-decoration: none;
        font-family: 'Muli', sans-serif;
        transition: all .3s ease;
        :hover {
            color: #4095c6;
        }
    }
    .active {
        color: #4095c6;
    }
`

const LilStart = styled.li`
   margin: auto 22px;
   a{
    background-color: transparent;
    border-radius: 18px;
    height: 30px !important;
    width: 137px !important;
    cursor: pointer;
    color: white;
    transition: all .3s ease;
    border: 2px solid white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    box-shadow: 0 0 4px 1px white;
    :hover {
        background-color: transparent;
        border: 2px solid  #4095c6;
        box-shadow: 0 0 4px 1px #4095c6;
        color: #4095c6;
    }
    }
`

export {Header}
