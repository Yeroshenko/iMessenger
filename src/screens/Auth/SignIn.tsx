import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { NAVIGATION } from '../../constants'
import { Button, Input, ScreenContainer } from '../../components'
import { AuthLink, AuthLinkText, AuthTitle } from './styles'

const inputStyle = { marginBottom: 28 }

export const SignIn: FC = () => {
  const navigation = useNavigation()

  const navigateToSignUp = () => navigation.navigate(NAVIGATION.SIGN_UP)

  return (
    <ScreenContainer>
      <AuthTitle>Sign in to iMessenger</AuthTitle>
      <Input placeholder='Email' keyboardType='email-address' style={inputStyle} />
      <Input placeholder='Password' secureTextEntry={true} style={inputStyle} />
      <Button title='Login' />
      <AuthLink onPress={navigateToSignUp}>
        <AuthLinkText>Register</AuthLinkText>
      </AuthLink>
    </ScreenContainer>
  )
}
