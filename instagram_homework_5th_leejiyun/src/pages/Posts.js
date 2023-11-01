import React from 'react';
import '../App.css';
import Post1 from '../assets/post1.jpg';
import Post2 from '../assets/post2.jpg';
import Post3 from '../assets/post3.jpg';
import styled from 'styled-components';
const PostDiv= styled.div`
    margin: 0 25vw;
    display: flex;
    justify-content: space-between;
`;
const PostImg= styled.img`
    width:16vw;
    height:auto;
`;
function Posts(){
    return(
        <>
            <PostDiv>
                    <PostImg src={Post1} alt="post"/>
                    <PostImg src={Post2} alt="post2"/>
                    <PostImg src={Post3} alt="post3"/>
            </PostDiv>
        </>
    )
}

export default Posts;
