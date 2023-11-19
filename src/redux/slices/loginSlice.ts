import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { useEffect } from "react";

type LoginData = {
    email:string
    password:string
    checkbox:boolean
}

const initialState = {
    data: {email: '', password:'', checkbox:false } as LoginData
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

export const FetchData = () => {
  useEffect(() => {
    alert('s')
    fetch("https://mockapi/login", {
      method: "PUT",
      body : initialState as any}).then(() => alert('данные отправлны на сервер'))
  }, [initialState])
}




export const { setLoginData } = loginSlice.actions

export const selectLogin = (state: RootState) => state.login.data

export default loginSlice.reducer