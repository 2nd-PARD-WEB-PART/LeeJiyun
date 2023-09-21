import Topmenu from'./Topmenu.js';
import Mypage from './Mypage.js';
import Middlemenu from './Middlemenu.js';
import Posts from './Posts.js';
import './App.css';

function App() {
  return (
    <div className='font_fam'>
      <div className='donotscroll'>
        <Topmenu></Topmenu>        
        <Mypage></Mypage>
        <Middlemenu></Middlemenu>
        <Posts></Posts>
      </div>
    </div>
  );
}

export default App;
