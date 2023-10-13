import React from 'react';
import Logo from '../assets/Abel/Logo.png';
import HomeFill from '../assets/Home-fill.png';
import Home from '../assets/home.png';
import Add from '../assets/add.png';
import Like from '../assets/likes.png';
import Mine from '../assets/Abel/mine.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const FontDiv= styled.div`
    color: var(--Black, #262626);
    font-family: Roboto;
    src: url("./assets/Abel/Roboto-Black.woff") format("woff");
`;
const Header = styled.div`
    background-color: #FAFAFA;
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

const TopImageLogo = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    align-items: baseline;
    padding-top: 1%;
    box-sizing: border-box;
`;

const TopImageToEditprofile = styled.div`
    flex-grow: 0;
    margin-right: 0;
    display: flex;
    align-items: center;
`;

const ImageLogo = styled.img`

    width: 5vw;   
    height: auto;
`;
const ImageMenuDiv = styled.div`
    width: 7vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ImageMenu = styled.img`
    width: 2vh;
    height: 2vh;
    cursor: pointer;
`;
const ImageMine = styled.img`
    width: 2vh;
    height: 2vh;
    border-radius: 50%;
    cursor: pointer;
`;
const SearchBar = styled.input`
    border-radius: 3px;
    border: 1px solid var(--Border-Color, #DBDBDB);
    background: #EFEFEF;
    text-align: center;
    color: #8E8E8E;
    font-family: Roboto;
    font-size: 0.7vw;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    width: 20.8vw;
    height: 1.4vw;
    margin-right: 12vw;
`;

function Topmenu(){
    return(
        <div>
            <header>
                <FontDiv>
                    <Header>
                        <Menubar>
                            <TopImageLogo>
                                <Link to='/home'>
                                    <ImageLogo src={Logo}/>
                                </Link>
                            </TopImageLogo>
                            <SearchBar placeholder='검색'/>
                            <TopImageToEditprofile>
                                <ImageMenuDiv>
                                    <Link to='/home'>
                                        <ImageMenu src={HomeFill} alt="homefill"/>
                                    </Link>
                                    <ImageMenu src={Add} alt="add"/>
                                    <ImageMenu src={Like} alt="like"/>
                                    <Link to='/editprofile'>
                                    <ImageMine src={Mine}/>
                                </Link>
                                </ImageMenuDiv>
                            </TopImageToEditprofile>
                        </Menubar>
                    </Header>
                </FontDiv>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
        
    )
}

export default Topmenu;
