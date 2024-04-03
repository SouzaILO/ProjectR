import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux' 

import  userReducer  from './features/user.ts'





const store = configureStore({
 reducer: {
    user: userReducer,
   
  }
})



export { store }

export default store 

export type RootState = ReturnType<typeof store.getState>