import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { NAVIGATION } from '../../constants'
import { Button, Input, ScreenContainer } from '../../components'
import { AuthLink, AuthLinkText, AuthTitle } from './styles'

const inputStyle = { marginBottom: 28 }

export const SignUp: FC = () => {
  const navigation = useNavigation()

  const navigateToSignIn = () => navigation.navigate(NAVIGATION.SIGN_IN)

  return (
    <ScreenContainer>
      <AuthTitle>Sign up to iMessenger</AuthTitle>
      <Input placeholder='Username' style={inputStyle} />
      <Input placeholder='Email' keyboardType='email-address' style={inputStyle} />
      <Input placeholder='Password' secureTextEntry={true} style={inputStyle} />
      <Input placeholder='Repeat password' secureTextEntry={true} style={inputStyle} />
      <Button title='Register' />
      <AuthLink onPress={navigateToSignIn}>
        <AuthLinkText>Login</AuthLinkText>
      </AuthLink>
    </ScreenContainer>
  )
}
