import React from 'react';
import '../App.css';
import Mine from '../assets/Abel/mine.jpg';
import Option from '../assets/Abel/Options.jpg'; 
import styled from 'styled-components';


const Mypage_layout = styled.div`
    box-sizing: border-box;
    margin: 0 25vw;
    width: 50%;
    height: 23vh;
    align-items: center;
    display: flex;
    border-bottom: 1px solid;
    border-color: #DBDBDB;
`;
const Main_part = styled.div`
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
const Image_main_div = styled.div`
    width: 34%;
    height: 100%;
    display: flex;
`;

const Image_main = styled.img`
    width: 7.5vw;
    height: 7.5vw;
    border-radius: 50%;
    margin-left: 22%;
    margin-top: 10.5%;
`;
const Word_div1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 26.6%;
`;
const My_Name = styled.span`
    color: var(--Black, #262626);
    font-weight: 400;
    font-size: 1rem;
    line-height: 80%; /* 114.286% */
    display: inline;
`;
const Word_div2 = styled.div`
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
const Word_div3 = styled.div`
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
const Profile_btn = styled.button`
    background-color: white;
    margin:12.5% 1.6% 12.5% 3.2%;
    height: 75%;
    border-radius: 4px;
    border-color: #DBDBDB;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
`;
const Image_option= styled.img`
    display: inline-block;
    cursor: pointer;
`;
const Span_mypage =styled.span`
    margin-right: 1.8%;
`;

function Mypage(){
    return(
        <>
        <Mypage_layout>
            <Main_part>
                <Image_main_div>
                    <Image_main src={Mine} alt='Mine'/>
                </Image_main_div>
                <Word>
                    <Word_div1>
                        <My_Name>pard_web</My_Name>
                        <Profile_btn>프로필 편집</Profile_btn>
                        <Image_option src={Option} alt="option"/>
                    </Word_div1>
                    <Word_div2>
                        <Span_mypage>게시물 500</Span_mypage>
                        <Span_mypage>팔로워 255</Span_mypage>
                        <Span_mypage>팔로우 500</Span_mypage>
                    </Word_div2>
                    <Word_div3>
                        <Span_mypage>Pay it forward</Span_mypage>
                    </Word_div3>
                </Word>
            </Main_part>
        </Mypage_layout>
        </>
    )
}

export default Mypage;
