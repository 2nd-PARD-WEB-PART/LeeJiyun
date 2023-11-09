import React, {useState, useEffect} from 'react';
import Option from '../assets/Abel/Options.jpg'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from "axios";




const MypageLayout = styled.div`
    box-sizing: border-box;
    margin: 0 25vw;
    width: 50%;
    height: 23vh;
    align-items: center;
    display: flex;
    border-bottom: 1px solid;
    border-color: #DBDBDB;
`;
const MainPart = styled.div`
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
const ImageMainDiv = styled.div`
    width: 34%;
    height: 100%;
    display: flex;
`;

const ImageMain = styled.img`
    width: 7.5vw;
    height: 7.5vw;
    border-radius: 50%;
    margin: 10.5% 0 0 22%;
`;
const WordDiv1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 26.6%;
`;
const MyName = styled.span`
    color: var(--Black, #262626);
    font-weight: 400;
    font-size: 1rem;
    line-height: 80%; /* 114.286% */
    display: inline;
`;
const WordDiv2 = styled.div`
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
const WordDiv3 = styled.div`
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
const ProfileBtn = styled.button`
    background-color: #FAFAFA;
    margin:3.7vh 1.2vw 3vh 1vw;
    height: 75%;
    border-radius: 4px;
    border-color: #DBDBDB;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
`;
const ImageOption= styled.img`
    margin-top: 0.9vh;
    display: inline-block;
    cursor: pointer;
`;
const SpanMypage =styled.span`
    margin-right: 1.8%;
`;

function Mypage(){
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://3.35.236.83/pard/search/이지윤");
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
            } catch (error) {
                console.log("error: " + error);
            }
            };
        
            fetchData();
        }, []);

    const myInfo = {
        posts: 500,
        follower: 255,
        follow: 500
    };

    if (!data) {
        return null; // 또는 로딩 상태를 표시하는 UI를 반환할 수 있음
    }
    return(
        <>
        <MypageLayout>
            <MainPart>
                <ImageMainDiv>
                    <ImageMain src={data.imgURL} alt='Mine'/>
                </ImageMainDiv>
                <Word>
                    <WordDiv1>
                        <MyName>{data.name}</MyName>
                        <Link to='/editprofile'>
                            <ProfileBtn>프로필 편집</ProfileBtn>
                        </Link>
                        <Link to='/editprofile'>
                            <ImageOption src={Option} alt="option"/>
                        </Link>
                    </WordDiv1>
                    <WordDiv2>
                        <SpanMypage>게시물 {myInfo.posts}</SpanMypage>
                        <SpanMypage>팔로워 {myInfo.follower} </SpanMypage>
                        <SpanMypage>팔로우 {myInfo.follow} </SpanMypage>
                    </WordDiv2>
                    <WordDiv3>
                        <SpanMypage>최강 웹 그리고 나</SpanMypage>
                    </WordDiv3>
                </Word>
            </MainPart>
        </MypageLayout>
        </>
    )
}

export default Mypage;
