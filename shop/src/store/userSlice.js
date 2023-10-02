import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'ko', age : 20 },
  reducers : {
    changeName(state){
      state.name = 'Eric ko' // array, object인 경우 직접수정해도 state변경됨.
    },
    addAge(state, action){
      state.age += action.payload
    },
  }
})

export let { changeName, addAge } = user.actions

export default user