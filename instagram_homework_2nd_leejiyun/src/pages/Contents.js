import React from "react";
import Post1 from "../assets/post1.jpg";
import More from "../assets/More.png";
import Emoji from "../assets/Emoji.png";
import Filledlike from "../assets/FilledHeart.jpg";
import Mine from "../assets/Abel/mine.jpg";
import Like from "../assets/likes.png";
import Comment from "../assets/Comment.png";
import Share from "../assets/SharePosts.png";
import Save from "../assets/PostSave.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LargestDiv=styled.div`
  background-color: #FAFAFA;
  height: 95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Center=styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const LeftDiv=styled.div`
  width: 32vw;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;
const PostDiv=styled.div`
  width: 32vw;
  height: 81.4vh;
  display: flex;
  flex-direction: column;

`;
const PostHead=styled.div`
  background-color: white;
  width: 30.5vw;
  height: 4.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PostHeadLeft=styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PostHeadprofile=styled.img`
  margin: 0 0.5vw;
  width: 1.4vw;
  height: 1.4vw;
  border-radius: 50%;
`;
const PostHeadName=styled.span`
  color: #000;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1vw;
`;
const PostMore=styled.img`
  margin-right: 0.5vw;
  width: 1.4vw;
  height: 1.4vw;
`;
const PostMain=styled.img`
  height: 70%;
  width: 30.5vw;
`;
const PostComment=styled.div`
  background-color: white;
  height: 6%;
  width: 30.5vw;
  display: flex;
  align-items: center;
  border-top: 1px solid;
  border-color: #FAFAFA;
`;
const Emoticon=styled.img`
  margin: 0 0.5vw;
  width: 1.1vw;
  height: 1.2vw;
`;
const InputComment=styled.input`
  width: 24.5vw;
  height: calc(100%-1);
  text-decoration: black;
  font-size: 1.3vh;
  font-style: normal;
  font-weight: 900;
  line-height: 1.7vh;
  align-items: center;
  border: 0;
`;
const BtnComment=styled.button`
  margin-left: 0.7vh;
  background-color: white;
  border: 0;
  font-size: 1.3vh;
  font-weight: 900;
  color: #0095F6;
`;
const PostBody=styled.div`
  background-color: white;
  height: 19.5%;
  width: 30.5vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const PostBodyUI=styled.div`
  height: 30%;
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const PostBodyUILeft=styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PostBodyUIImg=styled.img`
  width: 1.3vw;
  height: 1.3vw;
`;  
const PostBodyText=styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  gap: 0.9vw;
  
`;
const PostBodyTextDiv = styled.div`
  height: 1vw;
  width: 100%;
  margin-left:1.8%;
  color: #000;
  font-size: 1.7vh;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7vh; /* 128.571% */
  text-transform: lowercase;
  display: flex;
  flex-direction: row;
`;
const PostBodyTextSpan=styled.span`
  margin-right: 1.3vw;
  color: #000;
  font-size: 1.7vh;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7vh; /* 128.571% */
  text-transform: lowercase;
`;
const PostBodyTextInput=styled.input`
  color: #000;
  font-size: 1.7vh;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5vh; /* 128.571% */
  text-transform: lowercase;
  border: 0;
  display: flex;
`;
const PostBodyTextSpan2=styled.span`
  color: var(--Gray, #8E8E8E);
  font-size: 1vh;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const RightDiv=styled.div`
  width: 18vw;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const RightProfile=styled.img`
  margin: 2.3vw 1.2vw 0 0;
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 50%;
`;
const RightSpan = styled.span`
  margin-top: 2.3vw;
  color: #000;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9vw; /* 138.462% */
  text-transform: lowercase;
`;

function Contents() {
  return (
    <>
      <LargestDiv>
        <Center>
          <LeftDiv>
            <PostDiv>
              <PostHead>
                <PostHeadLeft>
                  <PostHeadprofile src={Post1} alt="profile"/>
                  <PostHeadName>himes._.02</PostHeadName>
                </PostHeadLeft>
                <PostMore src={More} alt="more"/>
              </PostHead>
              <PostMain src={Post1} alt="poat1"/>
              <PostBody>
                <PostBodyUI>
                  <PostBodyUILeft>
                    <PostBodyUIImg src={Filledlike} alt="like"/>
                    <PostBodyUIImg src={Comment} />
                    <PostBodyUIImg src={Share} />
                  </PostBodyUILeft>
                  <PostBodyUIImg src={Save} />
                </PostBodyUI>
                <PostBodyText>
                  <PostBodyTextDiv>좋아요 1070개</PostBodyTextDiv>
                  <PostBodyTextDiv>
                    <PostBodyTextSpan>supershyguy</PostBodyTextSpan>
                    <PostBodyTextInput type="text" value="파드 파이팅!" readOnly/>
                  </PostBodyTextDiv>
                  <PostBodyTextDiv>
                    <PostBodyTextSpan2>1 HOUR AGO</PostBodyTextSpan2>
                  </PostBodyTextDiv>
                </PostBodyText>
              </PostBody>
              <PostComment>
                <Emoticon src={Emoji} alt="emoji"/>
                <InputComment type="type" name="comment" placeholder="댓글 달기..."/>
                <BtnComment type="submit">게시</BtnComment>
              </PostComment>
            </PostDiv>
          </LeftDiv>
          <RightDiv>
            <Link to='/editprofile'>
              <RightProfile src={Mine} alt="mine" />
            </Link>
            <RightSpan>01_jiyun</RightSpan>
          </RightDiv>
        </Center>
      </LargestDiv>
    </>
    
  );
}

export default Contents;

