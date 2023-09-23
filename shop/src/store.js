import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'ko'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
      user : user.reducer,
      stock : stock.reducer
   }
}) 