import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type LoginData = {
    email:string
    password:string
    checkbox:boolean
}

const initialState = {
    data: {email: '', password:''} as LoginData
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.data = action.payload
    },

  },
})

export const { setLoginData } = loginSlice.actions

export const selectLogin = (state: RootState) => state.login.data

export default loginSlice.reducer