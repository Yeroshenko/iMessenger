import React, { FC, useEffect } from 'react'
import { Alert } from 'react-native'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { NAVIGATION } from '../../constants'
import { Button, Input, ScreenContainer } from '../../components'
import { AuthLink, AuthLinkText, AuthTitle } from './styles'
import { IRegisterData } from '../../@interfaces'
import { register, setRegistrationError } from '../../store/slices/auth'
import { AppState } from '../../store'

const inputStyle = { marginBottom: 28 }

interface IFormData extends IRegisterData {
  passwordConfirm: string
}

export const SignUp: FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { registrationError } = useSelector((state: AppState) => state.auth)

  useEffect(() => {
    dispatch(setRegistrationError(''))
  }, [])

  useEffect(() => {
    registrationError && Alert.alert(registrationError)
  }, [registrationError])

  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(yup.object().shape({
      username: yup.string().required('Enter your username'),
      email: yup.string().email('Enter correct email').required('Email is a required'),
      password: yup.string().min(6, 'Min 6 charsets'),
      passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    }))
  })

  const navigateToSignIn = () => navigation.navigate(NAVIGATION.SIGN_IN)

  const registerHandler = handleSubmit(async (formData: IFormData) => {
    dispatch(register(formData))
  })

  return (
    <ScreenContainer>
      <AuthTitle>Sign up to iMessenger</AuthTitle>
      <Input placeholder='Username' name='username' style={inputStyle} control={control}
             errorText={errors.username?.message} hasError={errors.username} />
      <Input placeholder='Email' name='email' keyboardType='email-address' style={inputStyle} control={control}
             errorText={errors.email?.message} hasError={errors.email} />
      <Input placeholder='Password' name='password' secureTextEntry={true} style={inputStyle} control={control}
             errorText={errors.password?.message} hasError={errors.password} />
      <Input placeholder='Repeat password' name='passwordConfirm' secureTextEntry={true} style={inputStyle}
             control={control} errorText={errors.passwordConfirm?.message} hasError={errors.passwordConfirm} />
      <Button title='Register' onPress={registerHandler} />
      <AuthLink onPress={navigateToSignIn}>
        <AuthLinkText>Login</AuthLinkText>
      </AuthLink>
    </ScreenContainer>
  )
}
