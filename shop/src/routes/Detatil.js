import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Deatail(props) {

  let [num, setNum] = useState('')
  useEffect(()=>{
    if (isNaN(num) === true){
      alert('그러지마세요')
    }
  }, [num])

  let {id} = useParams();
  let item = props.shoes.find(function(x){
    return x.id == id
  })

  return (
    <div className="container">
      <input onChange={ (e)=>{ setNum(e.target.value) }}/>
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
    </div>
  )
}

export default Deatail;