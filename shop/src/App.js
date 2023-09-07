import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 대문 from './bg.png';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);
  console.log(shoes)
  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Eric's Shop🌲</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
                <Card shoes={ shoes[i] }></Card>
              )
            })
          }
        </div>
      </div> 
    </div>
  );
}

function Card (props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.shoes.id+1) +'.jpg'} className='pic'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p> ₩ {props.shoes.price }</p>
    </div>
  )
}

export default App;
