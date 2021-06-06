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
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.authError = action.payload
    },
    setRegistrationError: (state, action: PayloadAction<string>) => {
      state.registrationError = action.payload
    }
  }
})

export const { setLoading, setUser, setAuthError, setRegistrationError } = authSlice.actions


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
    dispatch(setAuthError(''))
    dispatch(setLoading(true))

    const user = await AuthApi.login(loginData)
    dispatch(setUser(user))

  } catch (error) {
    AuthApi.loginErrorCodes.includes(error.code)
      ? dispatch(setAuthError('Wrong email or password'))
      : dispatch(setAuthError('Something went wrong, please try again'))
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
    AuthApi.registerErrorCodes.includes(error.code)
      ? dispatch(setRegistrationError('Email address is already registered in the system'))
      : dispatch(setRegistrationError('Something went wrong, please try again'))
  } finally {
    dispatch(setLoading(false))
  }
}

export const logout = (): AppThunk => async (dispatch) => {
  try {
    await AuthApi.logout
    dispatch(setUser(null))
  } catch (err) {
    console.log({ err })
  }
}

export const googleSignIn = (): AppThunk => async (dispatch) => {
  try {
    const { user } = await AuthApi.googleSignIn()
    const { displayName, uid, photoURL, email } = user

    dispatch(setUser({ displayName, uid, photoURL, email } as IUser))

  } catch (err) {
    console.log({ err })
  }
}

export default authSlice.reducer
