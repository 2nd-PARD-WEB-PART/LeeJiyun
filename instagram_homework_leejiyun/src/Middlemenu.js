import React from 'react';
import './App.css';
import Post from './assets/Posts.png'; 
import Save from './assets/Save.png'; 
import Tagged from './assets/Tagged.png';

function Middlemenu(){
    return(
        <>
            <hr className="App-hr2"></hr>
            <div className='Postsimg-div'>
                <img src={Post} className='image-Post' alt="post"/>
                <span className='span-post'>게시물</span>
                <img src={Save} className='image-Save' alt="save"/>
                <span className='span-save'>저장됨</span>
                <img src={Tagged} className='image-Tagged' alt="tag"/>
                <span className='span-tag'>태그됨</span>
            </div>
        </>
    )
}

export default Middlemenu;
