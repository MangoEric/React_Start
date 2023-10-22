import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useContext, useDeferredValue, useEffect, useState, useTransition } from "react";
import { Context1 } from "../App.js";
import { addItem } from "../store.js"
import { useDispatch } from "react-redux";

function Deatail(props) {

  let {stock, shoes} = useContext(Context1)

  let {id} = useParams();
  let item = props.shoes.find(function(x){
    return x.id == id
  })
  let [tap, setTap] = useState(0);
  let [fadeDetail, setFadeDetail] = useState('');

  useEffect(()=>{
    let arr = localStorage.getItem('watched')
    arr = JSON.parse(arr)
    arr.push(item.id)
    arr = new Set(arr)
    arr = Array.from(arr)
    localStorage.setItem('watched', JSON.stringify(arr))
  },[])

  useEffect(()=>{
    setFadeDetail('end')
    return () =>{
      setFadeDetail('')
    }
  },[])

  let dispatch = useDispatch()

  return (
    <div className={'container start ' + fadeDetail}>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(item.id +1)+'.jpg'} width="100%" alt="hi"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem( {id : item.id , name : item.title , count : 1 } ))
            }}
          >주문하기</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTap(0)}} eventKey="link0">{shoes[0].title}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTap(1)}} eventKey="link1">{shoes[1].title}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTap(2)}} eventKey="link2">{shoes[2].title}</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap}/>
      {/* <Wow></Wow> */}
    </div>
  )
}

function TabContent({tap}) {
  let [fade, setFade] = useState('');
  let {stock, shoes} = useContext(Context1)

  useEffect(()=>{
    let time = setTimeout(()=>{ setFade('end') },100)
    return () =>{
      clearTimeout(time)
      setFade('')
    }
  },[tap])

  return (<div className={'start ' + fade}>
    {[ <div>재고 : {stock[0]}</div>, <div>재고 : {stock[1]}</div>, <div>재고 : {stock[2]}</div> ][tap]}
  </div>)
}

// let arr = new Array(10000).fill(0)

// function Wow(){

//   let [name, setName] = useState('')
//   let [isPending, startTransition] = useTransition();
//   let state = useDeferredValue(name) // 늦게처리를 원하는 state

//   return(
//     <div>
//       <input onChange={(e)=> {
//         startTransition(()=>{
//           setName(e.target.value)
//           })
//         }}/>
//       {
//         isPending ? '로딩중' :
//         arr.map(()=>{
//           return <div>{name}</div>
//         })
//       }
//     </div>
//   )
// }


export default Deatail;