import logo from './logo.svg';
import './App.css';

function App() {

  let post = '서울 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '16px'} }>Eric's Blog</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
