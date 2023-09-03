import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '서울 우동 맛집';
  let [글제목, b] = useState(['남자 셔츠 추천', '여자 코트 추천', '양말 추천']);

  // Destructuring
  let num = [1,2];
  let [a, c] = [1, 2];

  // state의 경우에는 data가 바뀌면 재 랜더링이 되어서 그냥 변수보다 좋다.

  return (
    <div className="App">
      <div className="black-nav">
        <img src='logo.png' id="logo"/>
        <h4 style={ {color : 'white', fontSize : '16px', paddingLeft : '10px'} }>Eric's Blog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>9월 3일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>9월 3일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>9월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
