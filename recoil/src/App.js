import './App.css';
import { useRecoilState } from 'recoil'
import { countState } from './atom'

function App() {
  return (
    <div>
      <Counter/>
      <DisplayCounter/>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>{
        setCount( count + 1 )
      }}>+</button>
      {count}
    </div>
  )
}

function DisplayCounter(){
  const [count] = useRecoilState(countState);
  return <div>{ count }</div>
}
export default App;
