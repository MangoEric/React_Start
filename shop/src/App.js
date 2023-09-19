import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 대문 from './bg.png';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detatil.js';
import axios from 'axios';

export let Context1 = createContext()


function App() {

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);

  let navigate = useNavigate();
  
  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Eric's Shop🌲</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={ { backgroundImage : 'url('+ 대문 +')' } }></div>
              <div>
                <img src={process.env.PUBLIC_URL + '/logo192.png'} id="logo"/>
                Welcome To Eric's Shop
              </div>
              <div className="container">
                <div className="row">
                  {
                    shoes.map((a,i)=>{
                      return (
                        <Card shoes={ shoes[i] } key={i}></Card>
                      )
                    })
                  }
                </div>
                <button className="btn btn-info"
                  onClick={()=>{
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                      console.log(result.data)
                      let copy = [...shoes, ...result.data];  
                      setShoes(copy);
                    })
                    .catch(()=>{
                      console.log('실패')
                    })
                  }}
                >상품추가</button>
              </div>  
          </>
        }/>
        <Route path="/detail/:id" element={
          <Context1.Provider value={{stock, shoes}}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
          }/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>Member<hr></hr><img src={process.env.PUBLIC_URL + '/me.png'}/></div>}/>
          <Route path="loaction" element={<div>위치</div>}/>
        </Route>
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </div>
  );
}

function Card (props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4" key={props}>
      <img 
        src={'https://codingapple1.github.io/shop/shoes'+ (props.shoes.id+1) +'.jpg'} 
        className='pic' alt="nice"
        onClick={()=>{ navigate('/detail/'+props.shoes.id)}}
        />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p> ₩ {props.shoes.price }</p>
    </div>
  )
}

function About () {
  let navigate = useNavigate();
  return (
    <div>
      <h4>회사 정보</h4>
      <button className="btn btn-primary" onClick={()=>{ navigate('/about/member') }}>member</button>
      <button className="btn btn-success" onClick={()=>{ navigate('/about/loaction') }}>loaction</button>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage(){
  let navigate = useNavigate();
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <button className="btn btn-primary" onClick={()=>{ navigate('/event/one') }}>one</button>
      <button className="btn btn-success" onClick={()=>{ navigate('/event/two') }}>two</button>
      <Outlet></Outlet>
    </div>
  )
} 

export default App;
