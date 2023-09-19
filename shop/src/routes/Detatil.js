import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import { Context1 } from "./../App.js";

function Deatail(props) {

  let {stock, shoes} = useContext(Context1)

  let {id} = useParams();
  let item = props.shoes.find(function(x){
    return x.id == id
  })
  let [tap, setTap] = useState(0);
  let [fadeDetatil, setFadeDetail] = useState('');

  useEffect(()=>{
    setFadeDetail('end')
    return () =>{
      setFadeDetail('')
    }
  },[])
  

  return (
    <div className={'container start ' + fadeDetatil}>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(item.id +1)+'.jpg'} width="100%" alt="hi"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
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


export default Deatail;