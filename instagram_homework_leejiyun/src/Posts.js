import React from 'react';
import './App.css';
import Post1 from './assets/post1.jpg';
import Post2 from './assets/post2.jpg';
import Post3 from './assets/post3.jpg';


function Posts(){
    return(
        <>
            <div className='post-div'>
                <img src={Post1} className='image-post1' alt="post1"/>
                <img src={Post2} className='image-post2' alt="post2"/>
                <img src={Post3} className='image-post3' alt="post3"/>
            </div>
        </>
    )
}

export default Posts;
