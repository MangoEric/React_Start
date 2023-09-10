import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Deatail(props) {

  useEffect(()=>{
    // mount, update 시 코드를 실행해주는 useEffect
    // html 랜더링 후에 동작합니다.
    // console.log('안뇽')
    // 어려운 연산
    // for(var i = 0 ; i < 10000 ; i ++){
    //   console.log(i);
    // }
    // 서버에서 데이터가져오는 작업 등등..

    setTimeout(()=>{
      setAlert(false)
    }, 2000)
  })

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let {id} = useParams();
  let item = props.shoes.find(function(x){
    return x.id == id
  })

  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(item.id +1)+'.jpg'} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <div>
          {count}
          <button onClick={()=>{setCount(count+1)}}>버튼</button>
        </div>
      </div>
    </div>
  )
}

export default Deatail;