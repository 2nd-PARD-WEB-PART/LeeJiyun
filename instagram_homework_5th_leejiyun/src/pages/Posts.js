import { React, useEffect, useState }  from 'react';
import '../App.css';
import Post1 from '../assets/post1.jpg';
import Post2 from '../assets/post2.jpg';
import Post3 from '../assets/post3.jpg';
import styled from 'styled-components';
import axios from 'axios';

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
    const [data, setData] = useState();
    {/*get으로 서버에 내장되어 있는 데이터들 불러오기*/}
    {/*async, await으로 비동기처리*/}    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://3.35.236.83/pard/search/이지윤");
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
            } catch (error) {  
                console.log("error: " + error);
            }
            };
        
            getData();
        }, []);
        if (!data) {
            return null; // 또는 로딩 상태를 표시하는 UI를 반환할 수 있음
        }
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
