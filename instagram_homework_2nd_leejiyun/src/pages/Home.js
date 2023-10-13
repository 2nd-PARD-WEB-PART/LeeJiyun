import Mypage from './Mypage.js';
import Middlemenu from './Middlemenu.js';
import Posts from './Posts.js';
import React from "react";
//import { Link } from 'react-router-dom';

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
  min-height:100%;
`;  

function Home(props) {
  return (
    <>
      <FontDiv>
        <DoNotScroll>
          <Mypage></Mypage>
          <Middlemenu></Middlemenu>
          <Posts></Posts>
        </DoNotScroll>
      </FontDiv>
    </>
    
  );
}

export default Home;
