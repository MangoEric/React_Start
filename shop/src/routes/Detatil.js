import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";

function Deatail(props) {

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
          <Nav.Link onClick={()=>{ setTap(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTap(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTap(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap}/>
    </div>
  )
}

function TabContent({tap}) {
  let [fade, setFade] = useState('');
  useEffect(()=>{
    let time = setTimeout(()=>{ setFade('end') },100)
    return () =>{
      clearTimeout(time)
      setFade('')
    }
  },[tap])

  return (<div className={'start ' + fade}>
    {[ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tap]}
  </div>)
}


export default Deatail;