import React from 'react';
import '../App.css';
import Post1 from '../assets/post1.jpg';
import Post2 from '../assets/post2.jpg';
import Post3 from '../assets/post3.jpg';
import styled from 'styled-components';
const Post_div= styled.div`
    margin: 0 25vw;
    display: flex;
    justify-content: space-between;
`;
const Post_img= styled.img`
    width:16vw;
    height:auto;
`;
function Posts(){
    return(
        <>
            <Post_div>
                <Post_img src={Post1} alt="post"/>
                
                <Post_img src={Post2} alt="post2"/>
                
                <Post_img src={Post3} alt="post3"/>
            </Post_div>
        </>
    )
}

export default Posts;
