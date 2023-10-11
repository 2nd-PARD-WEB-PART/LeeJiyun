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
const Middle_div_on = styled.div`
    display: flex;
    align-items: center;
    width: 2.6vw;
    margin-right: 3vw;
    height: 100%;
    border-top: 1px solid;
    border-color: black;
`;
const Middle_div_off = styled.div`
    display: flex;
    align-items: center;
    width: 2.6vw;
    margin-right: 3vw;
    height: 100%;
`;
const Middle_img = styled.img`
    width: auto;
    height: 22.6%;
`;
const Middle_span_on = styled.span`
    color: var(--Black, #262626);
    font-family: Abel;
    font-size: 22.6%;
    font-style: normal;
    font-weight: 400;
    line-height: 34%; /* 150% */
    text-transform: uppercase;
`;
const Middle_span_off = styled.span`
    color: var(--Gray, #8E8E8E);
    font-family: Abel;
    font-size: 22.6%;
    font-style: normal;
    font-weight: 400;
    line-height: 34%; /* 150% */
    text-transform: uppercase;
`;
const Border_div= styled.div`

`;

function Middlemenu(){
    return(
        <>
            <Middle>
                <Middle_div_on>
                    <Middle_img src={Post} alt="post"/>
                    <Middle_span_on>게시물</Middle_span_on>
                </Middle_div_on>
                <Middle_div_off>
                    <Middle_img src={Save} alt="save"/>
                    <Middle_span_off>저장됨</Middle_span_off>
                </Middle_div_off>
                <Middle_div_off>
                    <Middle_img src={Tagged} alt="tag"/>
                    <Middle_span_off>태그됨</Middle_span_off>
                </Middle_div_off>
            </Middle>
        </>
    )
}

export default Middlemenu;
