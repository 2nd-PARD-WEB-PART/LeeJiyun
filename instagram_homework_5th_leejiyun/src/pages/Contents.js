import React, { useState, useEffect, useRef, createContext } from "react";
import HomeFill from '../assets/Home-fill.png';
import Add from '../assets/add.png';
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
import axios from 'axios';

//450이하일 때, 451~750일 때, 750보다 클 때를 상정하여 반응형으로 프로그램 작성

const LikeContext = createContext();

const LargestDiv=styled.div`
  background-color: #FAFAFA;
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
`;
const Center=styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 25vw;

  @media (min-width: 451px) and (max-width: 750px) {
      margin: 0 30vw;
      width: 40vw;
  }
  @media (max-width: 450px) {
      margin: 0 20vw;
      width: 300px;
      flex-shrink: 0;
  }
`;
//450px이하일 때만 화면 최하단부에 보여지는 메뉴바 작성
const Lower=styled.div`
  background-color: #FAFAFA;
    width: 100vw;
    height: 3vw;
    border-top: 1px solid;
    border-color: #DBDBDB;
    display: flex;
    align-items: center;
    justify-content: space-between;
  @media (min-width: 451px) {
      display: none;
  }

`;
const LeftDiv=styled.div`
  width: 32vw;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  
  @media (min-width: 451px) and (max-width: 750px) {
      width: 40vw;
      margin-left: 5vw;
  }
  @media (max-width: 450px) {
      width: 60vw;
  }
`;
const PostDiv=styled.div`
  width: 32vw;
  height: 81.4vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 451px) and (max-width: 750px) {
      width: 40vw;
  }
  @media (max-width: 450px) {
      width: 60vw;
  }
`;
const PostHead=styled.div`
  background-color: white;
  width: 30.5vw;
  height: 4.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 450px) {
      width: 60vw;
      margin-top: -9vw;
  }
`;
const LowerDiv = styled.div`
  width: 50vw;
  height: 100%;
  margin-left: 25vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
    width: 2vh;
    height: 2vh;
    cursor: pointer;
`;
const ImageMine = styled.img`
    width: 2vh;
    height: 2vh;
    border-radius: 50%;
    cursor: pointer;
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
  height: 30.5vw;
  width: 30.5vw;

  @media (max-width: 450px) {
      width: 60vw;
      height: 60vw;
  }
`;
const PostComment=styled.div`
  background-color: white;
  height: 6%;
  width: 30.5vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid;
  border-color: #FAFAFA;
  @media (max-width: 450px) {
      width: 60vw;
  }
`;
const Emoticon=styled.img`
  margin: -0.3vw 0.7vw;
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

  @media (max-width: 450px) {
      width: 50vw;
  }
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
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 450px) {
      width: 60vw;
  }
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
  width: 7vw;
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
const CommentBodyTextSpan=styled.span`
  width: 7vw;  
  color: #000;
  font-size: 1.7vh;
  font-style: normal;
  font-weight: 100;
  line-height: 1.7vh; /* 128.571% */
  text-transform: lowercase;
`;
const CommentBodyTextInput=styled.input`
  width: 20.6vw;
  color: #000;
  font-size: 1.7vh;
  font-style: normal;
  font-weight: 100;
  line-height: 1.5vh; /* 128.571% */
  text-transform: lowercase;
  border: 0;
  display: flex;
  outline: none;
`;
const CommentLikeImg=styled.img`
  width: 1.7vh;
  height: 1.7vh;
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

  @media (min-width: 451px) and (max-width: 750px) {
      display: none;
  }
  @media (max-width: 450px) {
      display: none;
  }
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
  const [data, setData] = useState();
  {/*get으로 서버에 내장되어 있는 데이터들 불러오기*/}
  {/*async, await으로 비동기처리*/}
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
    
  const myLike = 1069;
  
  const [unliked, setUnliked] = useState(true);

  const [post, setPost] = useState({
    postLike: myLike,
  });
  
  const handleLikeClick = () => {
    setUnliked(!unliked); 
  };
  
  useEffect(() => {
    if (unliked === true) {
      setPost({ postLike: parseInt(post.postLike, 10) - 1 });
    } else {
      setPost({ postLike: parseInt(post.postLike, 10) + 1 });
    }
  }, [unliked]);

  const [comments, setComments] = useState([]); // 새로운 상태 추가
  const commentInputRef = useRef(null); // input ref 생성

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      text: commentInputRef.current.value,
      liked: false,
      likesCount: 8,
    };
    setComments([...comments, newComment]);
    commentInputRef.current.value = ''; // input 필드 초기화
  };

  const handleCommentLike = (index) => {
    setComments(comments.map((cmt, i) => 
        i === index 
          ? {...cmt, liked: !cmt.liked, likesCount: cmt.liked ? cmt.likesCount -1 : cmt.likesCount +1 } 
          : cmt
    ));
  };

  if (!data) {
    return null; // 또는 로딩 상태를 표시하는 UI를 반환할 수 있음
  }
  return (
    <>
    <LikeContext.Provider value={{ post, setPost, comments, setComments }}>
      <LargestDiv>
        <Lower>{/*화면 최하단부에 나타나는 메뉴바, 너비가 450보다 클 경우 사라짐, 링크도 걸어놓음, column-reverse로 하단부로 위치시킴*/}
          <LowerDiv>
            <Link to='/contents'>
              <Image src={HomeFill} alt="homefill"/>
            </Link>
            <Image src={Add}/>
            <Link to='/home'>
              <ImageMine src={data.imgURL}/>
            </Link>
          </LowerDiv>
        </Lower>
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
              <PostMain src={Post1} alt="post1"/>
              <PostBody>
                <PostBodyUI>
                  <PostBodyUILeft>
                    <PostBodyUIImg src={unliked !== true ? Filledlike : Like} alt="like" onClick={handleLikeClick}/>
                    <PostBodyUIImg src={Comment} />
                    <PostBodyUIImg src={Share} />
                  </PostBodyUILeft>
                  <PostBodyUIImg src={Save} />
                </PostBodyUI>
                <PostBodyText>
                  <PostBodyTextDiv>좋아요 {post.postLike}</PostBodyTextDiv>
                  <PostBodyTextDiv>
                    <PostBodyTextSpan>supershyguy</PostBodyTextSpan>
                    <PostBodyTextInput type="text" value="파드 파이팅!" readOnly/>
                  </PostBodyTextDiv>
                  {comments.map((comment, index) => (
                      <PostBodyTextDiv key={index}>
                        <CommentBodyTextSpan>{data.name}</CommentBodyTextSpan>
                        <CommentBodyTextInput type="text" value={comment.text} readOnly/>

                        <CommentLikeImg onClick={() => handleCommentLike(index)} src={comment.liked ? Filledlike : Like}/>
                          
                        
                        {comment.likesCount}
                      </PostBodyTextDiv>
                    ))}
                  {comments.length === 0 && (
                    <PostBodyTextDiv>
                      <PostBodyTextSpan2>1 HOUR AGO</PostBodyTextSpan2>
                    </PostBodyTextDiv>
                  )}
                </PostBodyText>
              </PostBody>
              
              <PostComment>
              <form onSubmit={handleCommentSubmit}>
                <Emoticon src={Emoji} alt="emoji"/>
                <InputComment type="type" name="comment" ref={commentInputRef} placeholder="댓글 달기..."/>
                <BtnComment type="submit">게시</BtnComment>
                </form>
              </PostComment>
              
            </PostDiv>
          </LeftDiv>
          <RightDiv>
            <Link to='/home'>
              <RightProfile src={data.imgURL} alt="mine" />
            </Link>
            <RightSpan>{data.name}</RightSpan>
          </RightDiv>
        </Center>
      </LargestDiv>
    </LikeContext.Provider>
    </>
    
  );
}

export default Contents;

