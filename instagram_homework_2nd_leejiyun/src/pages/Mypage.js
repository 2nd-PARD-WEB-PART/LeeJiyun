import React from 'react';
import Mine from '../assets/Abel/mine.jpg';
import Option from '../assets/Abel/Options.jpg'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const MypageLayout = styled.div`
    box-sizing: border-box;
    margin: 0 25vw;
    width: 50%;
    height: 23vh;
    align-items: center;
    display: flex;
    border-bottom: 1px solid;
    border-color: #DBDBDB;
`;
const MainPart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    
`;
const Word =styled.div`
    margin-top: 2%;
    width: 66%;
    height: 69%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const ImageMainDiv = styled.div`
    width: 34%;
    height: 100%;
    display: flex;
`;

const ImageMain = styled.img`
    width: 7.5vw;
    height: 7.5vw;
    border-radius: 50%;
    margin: 10.5% 0 0 22%;
`;
const WordDiv1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 26.6%;
`;
const MyName = styled.span`
    color: var(--Black, #262626);
    font-weight: 400;
    font-size: 1rem;
    line-height: 80%; /* 114.286% */
    display: inline;
`;
const WordDiv2 = styled.div`
    display: flex;
    align-items: center;
    height: 38.6%;
    color: var(--Black, #262626);
    font-family: Abel;
    font-size: 27.6%;
    font-style: normal;
    font-weight: 400;
    line-height: 31%;
`;
const WordDiv3 = styled.div`
    display: flex;
    align-items: center;
    height: 16%;
    color: var(--Black, #262626);
    font-family: Abel;
    font-size: 66.7%;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
`;
const ProfileBtn = styled.button`
    background-color: #FAFAFA;
    margin:3.7vh 1.2vw 3vh 1vw;
    height: 75%;
    border-radius: 4px;
    border-color: #DBDBDB;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
`;
const ImageOption= styled.img`
    margin-top: 0.5vh;
    display: inline-block;
    cursor: pointer;
`;
const SpanMypage =styled.span`
    margin-right: 1.8%;
`;

function Mypage(props){
    return(
        <>
        <MypageLayout>
            <MainPart>
                <ImageMainDiv>
                    <ImageMain src={Mine} alt='Mine'/>
                </ImageMainDiv>
                <Word>
                    <WordDiv1>
                        <MyName>01_jiyun</MyName>
                        <Link to='/editprofile'>
                            <ProfileBtn>프로필 편집</ProfileBtn>
                        </Link>
                        <ImageOption src={Option} alt="option"/>
                    </WordDiv1>
                    <WordDiv2>
                        <SpanMypage>게시물 500</SpanMypage>
                        <SpanMypage>팔로워 255</SpanMypage>
                        <SpanMypage>팔로우 500</SpanMypage>
                    </WordDiv2>
                    <WordDiv3>
                        <SpanMypage>Pay it forward</SpanMypage>
                    </WordDiv3>
                </Word>
            </MainPart>
        </MypageLayout>
        </>
    )
}

export default Mypage;
