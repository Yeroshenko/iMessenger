import styled from 'styled-components/native'

export const AuthTitle = styled.Text`
  padding: 48px 10px 60px;
  font-size: 48px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.mainBold};
`

export const AuthLinkText = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.mainBold};
  color: ${props => props.theme.colors.primary};
`

export const AuthLink = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const SocialButtons = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
