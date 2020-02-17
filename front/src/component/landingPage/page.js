import React from 'react';
import styled from 'styled-components'
import { Header } from './header'
import { PageOne } from './pageone'
import { PageTwo } from './pagetwo'
import { PageFour } from './pagefour'
import { Footer } from './footer'


function Page() {
    return(
        <section>
        <head>
        <title>Jobizz</title>
				<meta name="google-site-verification" content="Zr3CNPFlnlJDD8b80VOL9ZDPh_MRvxf9T9Jifrc2Zq0" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
				      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
				      crossOrigin="anonymous">
				</link>
				<script rel="prefetch" charSet="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2.js"/>
				<script type="text/javascript" src="/static/js/form.js"/>
      </head>
      <Body>
        <Header buttonStart={true}></Header>
        <PageOne></PageOne>
        <PageTwo></PageTwo>
        <PageFour></PageFour>
        <Footer></Footer>
      </Body>
    </section>
    )
}

const Body = styled.body`
    width: 100%;
    height: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    background-color: #21212e;
`

export {Page}
