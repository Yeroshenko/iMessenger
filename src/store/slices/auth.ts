import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginData, IRegisterData, IUser } from '../../@interfaces'
import { AppThunk } from '../index'
import { AuthApi } from '../../api'

const initialState = {
  user: null as IUser | null,
  isLoading: false,
  authError: '',
  registrationError: ''
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    }
  }
})

// Thunks
export const checkAuth = (): AppThunk => async (dispatch) => {
   AuthApi.checkAuth(user => {
    user
      ? dispatch(setUser(AuthApi.userTransformInfo(user)))
      : dispatch(setUser(null))
  })
}


export const login = (loginData: ILoginData): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const user = await AuthApi.login(loginData)
    dispatch(setUser(user))

  } catch (error) {
    console.log({ error })
  } finally {
    dispatch(setLoading(false))
  }
}

export const register = (registerData: IRegisterData): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const user = await AuthApi.register(registerData)
    dispatch(setUser(user))
  } catch (error) {
    console.log({ error })
  } finally {
    dispatch(setLoading(false))
  }
}

export const { setLoading, setUser } = authSlice.actions

export default authSlice.reducer
