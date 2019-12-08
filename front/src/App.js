import React, {Component, useState} from 'react'
import './App.css';
import LandingPage from './component/Home'
import { Lines } from 'react-preloaders';


class App extends Component {
  render() {
    return (
        <React.Fragment>
                <LandingPage/>
                <Lines/>
        </React.Fragment>
    );
  }
}

export default App;
