import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import './navbar.css'

function Navi() {
    const [change, setChange] = useState(false);
    const changePosition = 60;

    let position = useWindowScrollPosition();
    if (position.y > changePosition && !change)
        setChange(true)
    if (position.y <= changePosition && change)
        setChange(false)
    let style = { backgroundColor: change ? '#FFFFFF' : "#FFFFFF", transition: "400ms ease", height: "100px",
        position: "fixed", right: 0, left: 0, top: 0};

    return (
        <div className="stay" style={style}>
            <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar ">
                {/* <div className="container"> */}
                    <a className="navbar-brand" href="/">
                        <strong className="title font-weight-bold">Jobizz.</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a className="item font-weight-bold" href="#"
                                   target="_blank">Présentation</a>
                            </li>
                            <li className="nav-item">
                                <a className="item font-weight-bold" href="#"
                                   target="_blank">Télécharger</a>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </Navbar>
        </div>
    );
}

export default Navi