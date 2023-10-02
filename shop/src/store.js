import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0 , name : 'White and Black', count : 2 },
    {id : 2 , name : 'Grey', count : 1 },
  ],
  reducers : {
    addCount(state, action){
      let num = state.findIndex((a)=>{ return a.id == action.payload}) // 조건에 해당하는 번호 나옴
      state[num].count ++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})
export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
      user : user.reducer,
      cart : cart.reducer
   }
}) 