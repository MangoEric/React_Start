/* eslint-disable */
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 셔츠 추천', '강남 우동 맛집', '양말 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <img src='logo.png' id="logo"/>
        <h4 style={ {color : 'white', fontSize : '16px', paddingLeft : '10px'} }>Eric's Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코드 추천';
        글제목변경(copy);
      }}>글 수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}
      >가나다 정렬</button>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={ i }>
              <h4 onClick={()=>{ setModal(!modal); setTitle(i); }}>{ a } 
                <span className='like' 
                  onClick={ (e) =>{
                    e.stopPropagation();
                    let copy = [...따봉];
                    copy[i] = copy[i] +1;
                    따봉변경(copy);} }>👍</span> { 따봉[i] }</h4>
              <p>9월 { i + 1 }일 발행</p>
              <button
                onClick={()=>{
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                  let copy2 = [...따봉];
                  copy2.splice(i, 1);
                  따봉변경(copy2);
                }}
              >글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button
        onClick={()=>{
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);
          let copy2 = [...따봉];
          copy2.push(0);
          따봉변경(copy2);
        }}
      >글 발행</button>

      {
        modal == true 
        ? <Modal 글제목={ 글제목 } color="skyblue" title={ title } 글제목변경={ 글제목변경 }/> 
        : null
      }
      <Modal2></Modal2>
    </div>
  );
}

function Modal (props) {
  return (
    <div className="modal" style={ {background : props.color} }>
      <h4>제목 : { props.글제목[props.title] }</h4>
      <p>날짜 : 9월 { props.title + 1 }일 </p>
      <p>상세내용</p>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'ko',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 { this.state.name }
        <button onClick={()=>{
          this.setState({name : 'wow'})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
