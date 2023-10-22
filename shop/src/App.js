import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 대문 from './bg.png';
import { createContext, useEffect, useState, lazy, Suspense } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
// import Detail from './routes/Detail.js';
import axios from 'axios';
// import Cart from './routes/Cart.js';
import { useQuery } from "react-query"

export let Context1 = createContext()

const Detail = lazy( () => import('./routes/Detail.js'));
const Cart = lazy( () => import('./routes/Cart.js'));

function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);

  let navigate = useNavigate();

  let result = useQuery('query',()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{ 
      return a.data
    }),
    { staleTime : 2000 } //2초마다 갱신하도록 (지우면 끌 수 있음)
  )
  
  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Eric's Shop🌲</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto' style={{ color : 'white'}}>
            {
              result.isLoading && '로딩중'
            }
            {
              result.error && '에러남'
            }
            {
              result.data && result.data.name
            }
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>로딩중</div>}>
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
              <Suspense fallback={<div>로딩중</div>}>
                <Detail shoes={shoes}/>
              </Suspense>
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
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </Suspense>
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
