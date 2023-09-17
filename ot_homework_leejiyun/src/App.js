import logo from './KakaoTalk_20230910_174836775.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <h1>이지윤의 자기소개!</h1>
      <h2>안녕하세요 2기 PARDY 웹파트 이지윤입니다!</h2>
        <img src={logo} className="App-logo" alt="logo" />
      <h3>이번학기 나의 목표: <i>성공적인 롱커톤!</i></h3>
      <h3>좋아하는 것 3가지</h3>
      <p>구기종목(특히 축구)</p>
      <p>한식(떡볶이, 국밥)</p>
      <p>잠자기,,ㅎㅎ</p>
      </header>
    </div>
  );
}

export default App;
