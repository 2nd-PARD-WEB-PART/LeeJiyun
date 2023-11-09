
import Topmenu from './pages/Topmenu.js';
import Home from './pages/Home.js';
import Editprofile from './pages/Editproflie.js';
import Contents from './pages/Contents.js'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Mypage from './pages/Mypage.js';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Topmenu/>}>
          <Route path="/editprofile" element={<Editprofile/>} />
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/mypage' element={<Mypage/>} />
          <Route path="/contents" element={<Contents/>}/>
        </Route>
      </Routes>
  );
}

export default App;