/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목] = useState(['남자 셔츠 추천', '서울 우동 맛집', '양말 추천']);
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    따봉변경(따봉++)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <img src='logo.png' id="logo"/>
        <h4 style={ {color : 'white', fontSize : '16px', paddingLeft : '10px'} }>Eric's Blog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span className='like' onClick={ 함수 }>👍</span> { 따봉 } </h4>
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
