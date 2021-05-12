import React, { FC } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { NAVIGATION } from '../../constants'
import { FacebookIcon, GithubIcon, GoogleIcon } from '../../icons'
import { Button, Divider, Input, ProgressLoader, ScreenContainer, SocialButton } from '../../components'
import { AuthLink, AuthLinkText, AuthTitle, SocialButtons } from './styles'
import { ILoginData } from '../../@interfaces'
import { AppState } from '../../store'
import { login } from '../../store/slices/auth'

const inputStyle = { marginBottom: 28 }
const socialButtonStyle = { flex: 1, maxWidth: '30%' }


export const SignIn: FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isLoading } = useSelector((state: AppState) => state.auth)

  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(yup.object().shape({
      email: yup.string().email('Enter correct email').required('Email is a required'),
      password: yup.string().min(6, 'Min 6 charsets')
    }))
  })

  const navigateToSignUp = () => navigation.navigate(NAVIGATION.SIGN_UP)

  const loginHandler = handleSubmit(async (formData: ILoginData) => {
    dispatch(login(formData))
  })

  return (
    <ScreenContainer>
      <ProgressLoader visible={isLoading} />
      <AuthTitle>Sign in to iMessenger</AuthTitle>
      <Input placeholder='Email' name='email' keyboardType='email-address' style={inputStyle} control={control}
             errorText={errors.email?.message} hasError={errors.email} />
      <Input placeholder='Password' name='password' secureTextEntry={true} style={inputStyle} control={control}
             errorText={errors.password?.message} hasError={errors.password} />
      <Button title='Login' onPress={loginHandler} />
      <AuthLink onPress={navigateToSignUp}>
        <AuthLinkText>Register</AuthLinkText>
      </AuthLink>
      <Divider style={{ marginTop: 64, marginBottom: 40 }}>or continue with</Divider>
      <SocialButtons>
        <SocialButton style={socialButtonStyle}>
          <GoogleIcon size={32} />
        </SocialButton>
        <SocialButton style={socialButtonStyle}>
          <GithubIcon size={32} />
        </SocialButton>
        <SocialButton style={socialButtonStyle}>
          <FacebookIcon size={32} />
        </SocialButton>
      </SocialButtons>
    </ScreenContainer>
  )
}
