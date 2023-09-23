import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'ko',
  //1. state를 수정하려면 함수를 만들어야함.
  reducers : {
    changeName(state){
      return 'Eric ' + state
    }
  }
})

//2. 만든 함수를 export
export let { changeName } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id :0, name : 'White and Black', count : 2},
    {id :1, name : 'Grey', count : 1},
  ]
})

export default configureStore({
  reducer: {
      user : user.reducer,
      cart : cart.reducer
   }
}) 