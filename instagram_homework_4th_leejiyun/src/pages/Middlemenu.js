import React from 'react';
import '../App.css';
import Post from '../assets/Posts.png'; 
import Save from '../assets/Save.png'; 
import Tagged from '../assets/Tagged.png';
import styled from 'styled-components';


const Middle = styled.div`
    display: flex;
    align-content: stretch;
    align-items: center;
    margin: 0 25vw;
    padding: 0 15%;
    width: 50vw;
    height: 5vh;
`;
const MiddleDivOn = styled.div`
    display: flex;
    align-items: center;
    width: 2.6vw;
    margin-right: 3vw;
    height: 100%;
    border-top: 1px solid;
    border-color: black;
`;
const MiddleDivOff = styled.div`
    display: flex;
    align-items: center;
    width: 2.6vw;
    margin-right: 3vw;
    height: 100%;
`;
const MiddleImg = styled.img`
    width: auto;
    height: 22.6%;
`;
const MiddleSpanOn = styled.span`
    color: var(--Black, #262626);
    font-family: Abel;
    font-size: 22.6%;
    font-style: normal;
    font-weight: 400;
    line-height: 34%; /* 150% */
    text-transform: uppercase;
`;
const MiddleSpanOff = styled.span`
    color: var(--Gray, #8E8E8E);
    font-family: Abel;
    font-size: 22.6%;
    font-style: normal;
    font-weight: 400;
    line-height: 34%; /* 150% */
    text-transform: uppercase;
`;


function Middlemenu(){
    return(
        <>
            <Middle>
                <MiddleDivOn>
                    <MiddleImg src={Post} alt="post"/>
                    <MiddleSpanOn>게시물</MiddleSpanOn>
                </MiddleDivOn>
                <MiddleDivOff>
                    <MiddleImg src={Save} alt="save"/>
                    <MiddleSpanOff>저장됨</MiddleSpanOff>
                </MiddleDivOff>
                <MiddleDivOff>
                    <MiddleImg src={Tagged} alt="tag"/>
                    <MiddleSpanOff>태그됨</MiddleSpanOff>
                </MiddleDivOff>
            </Middle>
        </>
    )
}

export default Middlemenu;
