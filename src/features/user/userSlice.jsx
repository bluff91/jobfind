import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = { isLoading: false, user: null }

const userSlice = createSlice({ name: 'user', initialState })

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function (user, thunkAPI) {
    try {
      const { data } = await axios.post(
        'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register',
        {
          name: user.name,
          password: user.password,
          email: user.email,
        }
      )

      console.log('server response is: ', data.user)
    } catch (error) {
      console.log(error.message)
    }
  }
)

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login',
        { email: user.email, password: user.password }
      )
      console.log('data is: ', data)
    } catch (error) {
      console.log(error.message)
    }
  }
)

export default userSlice.reducer
