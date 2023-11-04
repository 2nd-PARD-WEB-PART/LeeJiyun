import React, {useState, useRef} from "react";
import styled from 'styled-components';
import Meta from "../assets/meta.png"
import Mine from '../assets/Abel/mine.jpg'


const FontDiv= styled.div`
    color: var(--Black, #262626);
    font-family: Roboto;
    src: url("./assets/Abel/Roboto-Black.woff") format("woff");
`;
const LargestDiv= styled.div`
  width: 100%;
  height:95vh;
  margin: 0;
  background-color: #F9F9F9;
  display: flex;
  justify-content: center;
`;
const MainDiv= styled.div`
  background-color: #FFF;
  margin: 3.1vh;
  width: 50vw;
  height: 63.2vh;
  display: flex;
  flex-direction: row;
`;
const LeftDiv=styled.div`
  width: 23.9%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Navi=styled.div`
  width: 100%;
  height: 16.4%;
  display: flex;
  flex-direction: column;
`;
const NaviSelectOn=styled.div`
  border-left: 3px solid;
  border-color: black;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const NaviSelectOff=styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const NaviSpan=styled.span`
  color: #000;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 2vw;
`;
const Bottom=styled.div`
  width: 100%;
  height: 37.1%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.7vh;
`;
const BottomDiv=styled.div`
  width: 8.3vw;
  height: 1.5vh;
  display: flex;
  align-items: center;
`;
const BottomSpan1=styled.span`
  color: #0095F6;
  font-family: Roboto;
  font-size: 1.5vh;
  font-style: normal;
  font-weight: 900;
  line-height: 2vh; 
`;
const BottomSpan2=styled.span`
  width: 8.3vw;
  height: 7.4vh;
  text-align: left;
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 0.8vh;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5vh;
`;
const BottomImg=styled.img`
  width: 3vw;
  height:auto;
`;
const Form=styled.form`
  width:76.1%;
  height:100%;
  display: flex;
  flex-direction: column;
`;
const RightDivTop=styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 3.5vh;
  height: 3.5vh;
  margin: 3vh 3vh 0 11.6vh;
`;
const ProfileTop=styled.div`
  margin-top: 3vh;
  height: 3.5vh;
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const ProfileName=styled.span`
  color: #262626;
  font-size: 1vw;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const ProfileImgEditor=styled.span`
  color: #0095F6;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const RightDivForm=styled.div`
  height: 80%;
  width: 100%;
`;
const UnderForm=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  
`;
const FormTextDiv=styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const NameDiv=styled.div`
  width: 100%;
  height: 3.0vh;
  display: flex;
  flex-direction: row-reverse;  
`;
const EmailDiv=styled.div`
  width: 100%;
  height: 3.0vh;
  display: flex;
  flex-direction: row-reverse;  
`;
const UrlDiv=styled.div`
  width: 100%;
  height: 3.0vh;
  display: flex;
  flex-direction: row-reverse;  
`
const TextAreaDiv=styled.div`
  width: 100%;
  height: 6.0vh;
  display: flex;
  flex-direction: row-reverse;  
`;
const Input=styled.input`
  width: 50%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0 20.7% 0 5%;
  padding: 0;
  border-radius: 2px;
  border: 1px solid #EFEFEF;
  background: #FFF;
  font-size: 1.5vh;
`;
const Text=styled.textarea`
  width: 50%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0 20.7% 0 5%;
  padding: 0;
  border-radius: 2px;
  border: 1px solid #EFEFEF;
  resize: none;
  background: #FFF;
  font-size: 1.5vh;
`;

const Label=styled.label`
  font-weight: 900;
`;
const FormSubmitDiv=styled.div`
  height: 30%;
  width: 100%;
`;
const FormSubmiBtn=styled.button`
  border-radius: 4px;
  background: ${({ hasChanges }) => hasChanges ? 'rgba(0, 149, 246,1)' : 'rgba(0, 149, 246,0.25)'};
  width: 8.6%;
  height: 2.7vh;
  margin: 8.6vh 0 0 29%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: Roboto;
  font-size: 1.3vh;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 0;
  cursor: pointer;
`;



function Editprofile({updateUserInfo}) {
  const [newName, setNewName] = useState('01_jiyun');
  const [newText, setNewText] = useState('최강 웹, 그리고 나');
  const [newWebsite, setNewWebsite] = useState('https://naver.com');
  const [newEmail, setNewEmail] = useState('12jiyun@gmail.com');
  const [newGender, setNewGender] = useState('상남자');
  const [hasChanges, setHasChanges] = useState(false);
  const [profileImage, setProfileImage] = useState(Mine); // 초기 프로필 이미지 설정
  const nameInputRef = useRef(null);
  const profileImageRef = useRef();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setHasChanges(true);
    const updatedName = nameInputRef.current.value;
    
    // 상태 업데이트
    setNewName(updatedName);
    
    const updatedUserInfo = {
      name: updatedName, // 새로운 이름
      mytext: newText,
      website: newWebsite,
      email: newEmail,
      gender: newGender,
    };
    
    updateUserInfo(updatedUserInfo);
    };
  
  
  
  

  return (
    <>
      <FontDiv>
        <LargestDiv>
          <MainDiv>
            <LeftDiv>
              <Navi>
                <NaviSelectOn>
                  <NaviSpan>프로필 편집</NaviSpan>
                </NaviSelectOn>
                <NaviSelectOff>
                  <NaviSpan>비밀번호 변경</NaviSpan>
                </NaviSelectOff>
              </Navi>
              <Bottom>
                <BottomDiv>
                  <BottomImg src={Meta} alt/>
                </BottomDiv>
                <BottomDiv>
                  <BottomSpan1>
                    Accounts center
                  </BottomSpan1>
                </BottomDiv>
                <BottomSpan2>
                  Control settings for connected experiences on Instagram, the Facebook app, and Messenger, including sharing stories and posts, and logging in.
                </BottomSpan2>
              </Bottom>
            </LeftDiv>
            <Form onSubmit={handleFormSubmit}>
              <RightDivTop>
                <ProfileImg src={Mine}/>
                <ProfileTop>
                  <ProfileName>{updatedUserInfo.name}</ProfileName>
                  <ProfileImgEditor>프로필 사진 바꾸기</ProfileImgEditor>
                </ProfileTop>
              </RightDivTop>
              <RightDivForm>
              <UnderForm>
                <FormTextDiv>
                  <NameDiv>
                    <Input 
                      type="type" 
                      name="name" 
                      ref={nameInputRef}
                      defaultValue={newName}
                      placeholder={updatedUserInfo.name} 
                      required />
                    <Label for="name">사용자 이름</Label>
                  </NameDiv>
                  <TextAreaDiv>
                    <Text 
                      type="text" 
                      name="message"
                      value={newText}
                      onChange={(e) => {setNewText(e.target.value);setHasChanges(true);}}
                      placeholder={updatedUserInfo.mytext} 
                      required />
                    <Label for="message">소개</Label>
                  </TextAreaDiv>
                  <UrlDiv>
                    <Input 
                      type="url" 
                      name="url" 
                      value={newWebsite}
                      onChange={(e) => {setNewWebsite(e.target.value);setHasChanges(true);}} 
                      placeholder={updatedUserInfo.website} 
                      required />
                    <Label for="url">웹사이트</Label>
                  </UrlDiv>

                  <EmailDiv>
                    <Input 
                      type="email" 
                      name="eamil" 
                      value={newEmail}
                      onChange={(e) => {setNewEmail(e.target.value); setHasChanges(true);}} 
                      placeholder={updatedUserInfo.email} 
                      required/>
                    <Label for="email">이메일</Label>
                  </EmailDiv>

                  <NameDiv>
                    <Input 
                      type="type" 
                      name="sex" 
                      value={newGender}
                      onChange={(e) => {setNewGender(e.target.value);setHasChanges(true);}} 
                      placeholder={updatedUserInfo.gender} 
                      required />
                    <Label for="sex">성별</Label>
                  </NameDiv>
                  
                </FormTextDiv>
                <FormSubmitDiv>
                  <FormSubmiBtn type="submit" hasChanges={hasChanges}>제출</FormSubmiBtn>
                </FormSubmitDiv>
              </UnderForm>
              </RightDivForm>
            </Form>
          </MainDiv>
        </LargestDiv>
      </FontDiv>
    </>  
  );
}

export default Editprofile;
