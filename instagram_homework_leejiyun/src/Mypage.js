import React from 'react';
import './App.css';
import Mine from './assets/Abel/mine.jpg';
import Option from './assets/Abel/Options.jpg'; 

function Mypage(){
    return(
        <>
        <div className='main_part'>
            <div className='image-div'>
                <img src={Mine} className='image-Main' alt="Mine"/>
            </div>
            <div className='word_div1'>
                <p className='my_name'>we_pard</p>
                <button className='button'>프로필 편집</button>
                <img src={Option} className='image-Option' alt="option"/>
            </div>
            
            <div className='word_div2'>
                <span>게시물 1</span><span className='word1'>팔로워 255</span><span className='word2'>팔로우 500</span>
            </div>
            <div className='word_div3'>
                <p>Pay it forward</p>
            </div>
        </div>
        </>
    )
}

export default Mypage;
