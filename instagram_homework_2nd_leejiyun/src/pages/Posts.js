import React from 'react';
import '../App.css';
import Post1 from '../assets/post1.jpg';
import Post2 from '../assets/post2.jpg';
import Post3 from '../assets/post3.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
                <Link to='/contents'>
                    <PostImg src={Post1} alt="post"/>
                </Link>
                <Link to='/contents'>
                    <PostImg src={Post2} alt="post2"/>
                </Link>
                <Link to='/contents'>
                    <PostImg src={Post3} alt="post3"/>
                </Link>
            </PostDiv>
        </>
    )
}

export default Posts;
