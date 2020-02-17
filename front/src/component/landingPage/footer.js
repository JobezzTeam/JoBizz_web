
import React from 'react'
import styled from 'styled-components'

function Footer() {
	return (
		<FooterSection>
			<FooterContainer>
				<FooterLogo>
					<img src={require('./ressources/Jobizz-Logo_Text-Ai.png')}/>
				</FooterLogo>
				<FooterText>
					<p>Lien Utile</p>
					<ul style={{listStyle: 'none'}}>
                    <Li><a href="#" target="_blank">Application Android</a></Li>
						<Li><a href="mailto:contact@jobezz.com">Application iOS</a></Li>
						<Li><a>Mentions légales</a></Li>
						<Li><a>Politique de confidentialité</a></Li>
					</ul>
				</FooterText>

				<FooterText>
					<p>Contactez-Nous</p>
					<ul style={{listStyle: 'none'}}>
                        <Li><a>jobizz_2022@labeip.epitech.eu</a></Li>
                        {/* <Li><a>For Business</a></Li>
						<Li><a>Event</a></Li>
						<Li><a>Team</a></Li>
						<Li><a>Blog</a></Li> */}
					</ul>
				</FooterText>
                <FooterIcons>
                    <p>Réseaux Sociaux</p>
                </FooterIcons>
			</FooterContainer>
			<FooterBottom>
				<Line/>
				<Pcontainer><p>© 2020 Jobezz. Tous droits réservés</p></Pcontainer>
			</FooterBottom>
		</FooterSection>
	)
}

const Li = styled.li`
  margin-top: 5px;
    a {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #b4b7ed;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #ffffff;
`

const FooterSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: dark;
 `


const FooterContainer = styled.div`
  display: flex;
  height: 80%;
  width: 85%;
  justify-content: space-around;
  align-items: flex-start;
  margin: 2% 0;

  div:nth-child(1) {
  	align-self: center;
  }
`

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img{
  width: 150px;
  height: auto;
}
`

const FooterText = styled.div`
  p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin-bottom: 7px;
  }
}
`

const FooterIcons = styled.div`
  p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 25px;
  height: auto;
}
`

const LogoFooter = styled.a`
    color: #b4b7ed;
    margin: 3% 1ch;
    font-size: 1.5em;
    :hover {
    color: #ffffff;
    }
`


const FooterBottom = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
  font-size: 16px;
  color: #f5f5f7;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  }
`

const Pcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1% 0;
  p {
    font-size: 14px !important;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #979797;
`

export {
	Footer
}
