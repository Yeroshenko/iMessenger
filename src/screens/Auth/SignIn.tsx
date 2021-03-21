import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { NAVIGATION } from '../../constants'
import { FacebookIcon, GithubIcon, GoogleIcon } from '../../icons'
import { Button, Divider, Input, ScreenContainer, SocialButton } from '../../components'
import { AuthLink, AuthLinkText, AuthTitle, SocialButtons } from './styles'

const inputStyle = { marginBottom: 28 }
const socialButtonStyle = { flex: 1, maxWidth: '30%' }

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
