
import Topmenu from './pages/Topmenu.js';
import Home from './pages/Home.js';
import Editprofile from './pages/Editproflie.js';
import Contents from './pages/Contents.js'
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';



function App() {
  const info = {
    name: "01_jiyun",
    posts: 500,
    follower: 255,
    follow: 500,
    mytext: "최강 웹 그리고 나",
    imageMine: "../assets/Abel/mine.jpg",
    imagehome: "../assets/Home-fill.png",
    imagelike: "../assets/likes.png",
    website: '',
    email:'12jiyun@gmail.com',
    gender: '상남자',
    postLike: 1069 ,
    CommentArray: []
  };  

  return (
    <Routes>
      <Route path="/" element={<Topmenu />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/contents" element={<Contents />} />
      </Route>
    </Routes>
    
    
  );
}

export default App;