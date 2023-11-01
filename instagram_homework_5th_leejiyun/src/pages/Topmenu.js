import React, {useContext, useEffect, useState} from 'react';
import Logo from '../assets/Abel/Logo.png';
import HomeFill from '../assets/Home-fill.png';
import Home from '../assets/home.png';
import Add from '../assets/add.png';
import Like from '../assets/likes.png';
import Insta from '../assets/insta.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { UserInfoContext } from '../App';  // App.js에서 context 가져오기


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

    @media (min-width: 750px) {
        margin: 0 30vw;
        width: 40vw;
    }
    @media (max-width: 600px) {
        margin: 0 20vw;
        width: 60vw;
    }
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



const ImageLogoLargeScreen = styled(ImageLogo)`
    @media (max-width: 600px) {
        display: none;
    }
`;
const ImageMenuDiv = styled.div`
    width: 7vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ImageMenuHome = styled.img`
    width: 2vh;
    height: 2vh;
    cursor: pointer;

    @media (max-width: 600px) {
        display: none;
    }
`;
const ImageMenuAdd = styled.img`
    width: 2vh;
    height: 2vh;
    cursor: pointer;

    @media (max-width: 600px) {
        display: none;
    }
`;
const ImageMenuLike = styled.img`
    width: 2vh;
    height: 2vh;
    cursor: pointer;
`;
//너비가 600보다 작을 때와 클 때의 이미지 로고가 달라짐
//각 범주에 미디어 쿼리 사용해서 조건문 대용으로 사용 가능
const ImageLogoSmallScreen = styled(ImageMenuLike)`
    @media (min-width: 601px) {
        display: none;
    }
`;
const ImageMine = styled.img`
    width: 2vh;
    height: 2vh;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 600px) {
        display: none;
    }
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
    @media (min-width: 750px) {
        display: none;
    }
    @media (max-width: 600px){
        margin-right: 15vw;
        font-size: 1.2vw;
        width: 60vw;
        height: 2.5vw;
    }
`;

function Topmenu(){
    const { userInfo } = useContext(UserInfoContext); // UserInfoContext를 사용
    const [myUserInfo, setMyUserInfo] = useState(userInfo);

    useEffect(() => {
        // userInfo 상태가 변경될 때 myUserInfo 업데이트
        setMyUserInfo(userInfo);
    }, [userInfo]);
    const location = useLocation();
    return(
        <div>
            <header>
                <FontDiv>
                    <Header>
                        <Menubar>
                            <TopImageLogo>
                                <Link to='/contents'>
                                    <ImageLogoSmallScreen src={Insta}/>
                                    <ImageLogoLargeScreen src={Logo}/>
                                </Link>
                            </TopImageLogo>
                            {location.pathname === '/contents' && <SearchBar placeholder='검색'/>}
                            <TopImageToEditprofile>
                                <ImageMenuDiv>
                                    <Link to='/contents'>
                                        <ImageMenuHome src={location.pathname === '/editprofile' ? Home : HomeFill} alt="homefill"/>
                                    </Link>
                                    <ImageMenuAdd src={Add} alt="add"/>
                                    <ImageMenuLike src={Like} alt="like"/>
                                    <Link to='/home'>
                                    <ImageMine src={myUserInfo.profile} alt="mine"/>
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
