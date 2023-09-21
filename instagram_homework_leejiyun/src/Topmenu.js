import React from 'react';
import './App.css';
import Logo from './assets/Abel/Logo.png';
import Menu from './assets/Abel/Menu-Button.svg';
import Mine from './assets/Abel/mine.jpg';   

function Topmenu(){
    return(
        <>
            <div className='menubar_empty'>
            <img src={Logo} className='image-Logo' alt="logo"/>
            <img src={Menu} className='image-Menu' alt="Menu-Button"/>
            <img src={Mine} className='image-Mine' alt="Mine"/>
            </div>
        
            <div className='App-hr-border'>
            <hr className="App-hr"></hr>
            </div>
        </>
    )
}

export default Topmenu;
