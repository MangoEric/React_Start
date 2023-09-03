/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 셔츠 추천', '강남 우동 맛집', '양말 추천']);
  let [따봉, 따봉변경] = useState(0);

  // array/object 담은 변수엔 화살표만 저장됨
  let arr = [1,2,3];

  return (
    <div className="App">
      <div className="black-nav">
        <img src='logo.png' id="logo"/>
        <h4 style={ {color : 'white', fontSize : '16px', paddingLeft : '10px'} }>Eric's Blog</h4>
      </div>

      <button onClick={()=>{
        //괄호 벗지고 다시 씌움 -> 새로운 state로 인식
        let copy = [...글제목];
        copy[0] = '여자 코드 추천';

        //state는 기존값과 동일하면 변경되지 않음.
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
    </div>
  );
}

export default App;
