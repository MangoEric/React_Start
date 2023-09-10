import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Deatail(props) {

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false)}, 2000)
    console.log(2)
    // useEffect 가 실행되기 전에 실행됨 -> 별명 clean up function
    return () => {
      console.log(1)
      //기존 타이머는 제거해주세요.
      clearTimeout(a)
      //기존 데이터요청은 제거해주세요.. 등등..
    }
  }, []) // 컴포넌트 mount 시 1회만 실행하고 싶으면 이렇게

  // 1. 이러면 재렌더링마다 코드를 실행가능합니다.
  // useEffect(()=>{ 실행할코드 })
  // 2. 이러면 컴포넌트 mount시 (로드시) 1회만 실행가능합니다.
  // useEffect(()=>{ 실행할코드 }, [])
  // 3. 이러면 useEffect 안의 코드 실행 전에 항상 실행됩니다. 
  // useEffect(()=>{ 
  //   return ()=>{
  //     실행할코드
  //   }
  // })
  // 4. 이러면 컴포넌트 unmount시 1회 실행됩니다.
  // useEffect(()=>{ 
  //   return ()=>{
  //     실행할코드
  //   }
  // }, [])
  // 5. 이러면 state1이 변경될 때만 실행됩니다.
  // useEffect(()=>{ 
  //   실행할코드
  // }, [state1])

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
      </div>
    </div>
  )
}

export default Deatail;