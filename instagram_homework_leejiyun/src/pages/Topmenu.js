import React from 'react';
import '../App.css';
import Logo from '../assets/Abel/Logo.png';
import Menu from '../assets/Abel/Menu-Button.svg';
import Mine from '../assets/Abel/mine.jpg'
//import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    width: 100vw;
    border-bottom: 1px solid;
    border-color: #DBDBDB;
    display: flex;
    align-items: center;
`;
const Menubar = styled.div`
    margin: 0 25vw;
    width: 50vw;
    height: 4vh;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 0;
`;

const Top_Image_logo = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

const Top_Image_to_Editprofile = styled.div`
    flex-grow: 0;
    margin-right: 0;
    display: flex;
    align-items: center;
`;
const Image_Logo = styled.img`
    width: 5.2vw;   
    height: 2.5vh;
`;
const Image_Menu = styled.img`
    width: 8vw;
`;
const Image_Mine = styled.img`
    padding-right: 0;
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    cursor: pointer;
`;

function Topmenu(){
    return(
        <>
        <Header>
            <Menubar>
                <Top_Image_logo>
                    <Image_Logo src={Logo}/>
                </Top_Image_logo>
                <Top_Image_to_Editprofile>
                    <Image_Menu src={Menu}/>
                    <Image_Mine src={Mine}/>
                </Top_Image_to_Editprofile>
            </Menubar>
        </Header>
        </>
        
    )
}

export default Topmenu;
