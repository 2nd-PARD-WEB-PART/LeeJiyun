
import Topmenu from './Topmenu.js';
import Home from './pages/Home.js';
import Editprofile from './pages/Editproflie.js';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Topmenu />}>
        <Route index element={<Home />} />
        <Route path="/Editprofile" element={<Editprofile />} />
      </Route>
    </Routes>
    
    
  );
}

export default App;