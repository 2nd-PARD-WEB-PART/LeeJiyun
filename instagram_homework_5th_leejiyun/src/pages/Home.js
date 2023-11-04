import Mypage from './Mypage.js';
import Middlemenu from './Middlemenu.js';
import Posts from './Posts.js';
import {React, useContext, useState, useEffect} from "react";
import { UserInfoContext } from '../App';  // App.js에서 context 가져오기


import styled from 'styled-components';

const FontDiv= styled.div`
  height:95vh;
  background-color: #FAFAFA;
  color: var(--Black, #262626);
  font-family: Abel;
  src: url("../assets/Abel/Abel-Regular.woff") format("woff");
`;
const DoNotScroll= styled.div`
  overflow: hidden;
  height: 95vh;
  width:100%;
`;  

function Home() {
  const { userInfo } = useContext(UserInfoContext); // UserInfoContext를 사용
    const [myUserInfo, setMyUserInfo] = useState(userInfo);

    useEffect(() => {
        // userInfo 상태가 변경될 때 myUserInfo 업데이트
        setMyUserInfo(userInfo);
    }, [userInfo]);
  return (
    <>
      <FontDiv>
        <DoNotScroll>
          <Mypage userInfo={userInfo}></Mypage>
          <Middlemenu></Middlemenu>
          <Posts></Posts>
        </DoNotScroll>
      </FontDiv>
    </>
    
  );
}

export default Home;
