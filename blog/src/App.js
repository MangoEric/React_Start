/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 셔츠 추천', '강남 우동 맛집', '양말 추천']);
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <img src='logo.png' id="logo"/>
        <h4 style={ {color : 'white', fontSize : '16px', paddingLeft : '10px'} }>Eric's Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코드 추천';
        글제목변경(copy)
      }}>글 수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}
      >가나다 정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span className='like' onClick={ () =>{ 따봉변경(따봉++)} }>👍</span> { 따봉 } </h4>
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

      <Modal/>
      <Modal2/>
    </div>
  );
}

function Modal () {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

const Modal2 = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
