
import Topmenu from './pages/Topmenu.js';
import Home from './pages/Home.js';
import Editprofile from './pages/Editproflie.js';
import Contents from './pages/Contents.js'
import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import Mypage from './pages/Mypage.js';
import Mine from './assets/Abel/mine.jpg';


export const UserInfoContext = React.createContext(); //export해줌으로써 다른 파일에서 context api 갖다쓸수 있게 하였음


function App() {
  const [userInfo, setUserInfo] = useState({
    // 초기 사용자 정보
    name: '01_jiyun',
    mytext: '최강 웹, 그리고 나',
    website: '',
    email: '12jiyun@gmail.com',
    gender: '상남자',
    profile: Mine,
  });

  // 사용자 정보 업데이트 함수
  const updateUserInfo = (updatedInfo) => {
    setUserInfo(updatedInfo);
  };
  

  return (
    <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
      <Routes>
        <Route path="/" element={<Topmenu/>}>
          <Route path="/editprofile" element={<Editprofile/>} />
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/mypage' element={<Mypage/>} />
          <Route path="/contents" element={<Contents/>}/>
        </Route>
      </Routes>
    </UserInfoContext.Provider>
    
    
  );
}

export default App;