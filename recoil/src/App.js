import './App.css';
import { atom, useRecoilState } from 'recoil'

const countState = atom({
  key: "count",
  default: 10
})

function App() {
  return (
    <div>
      hello Recoil
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
