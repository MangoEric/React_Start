import { Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from "react-redux"
import { changeName, addAge } from './../store/userSlice.js'
import { addCount } from './../store.js'
import { useState, memo, useMemo } from 'react'

let Child = memo( function(){
  console.log('재랜더링')
  return <div>자식</div>
})

function unlimitied(){
  let num = 0;
  for(let i = 0 ; i < 1000; i++) {
      num += i;
  }
  return num
}

function Cart() {

  let state = useSelector((state)=>{ return state })
  let dispatch = useDispatch();
  let [count, setCount] = useState(0)

  let result = useMemo(()=>{return console.log(unlimitied())},[state])

  return (
    <div>
      {state.user.name} ({state.user.age}) 의 장바구니 
      <button className="btn btn-primary"
      onClick={()=>{
        dispatch(changeName())
      }}>변경</button>
      <button className="btn btn-primary"
      onClick={()=>{
        dispatch(addAge(1))
      }}>나이 변경</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i)=>
              <tr key={i}>
                <td>{ a.id }</td>
                <td>{ a.name }</td>
                <td>{ a.count }</td>
                <td>
                <button className="btn btn-info"
                  onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Child></Child>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}

export default Cart