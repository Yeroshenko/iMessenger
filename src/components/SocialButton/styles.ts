import styled from 'styled-components/native'
import { BaseButton } from 'react-native-gesture-handler'

export const RippleSocialButtonWrap = styled(BaseButton)`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${props => props.theme.colors.lightblue};
  border-radius: 16px;
`

export const SocialButtonWrap = styled.TouchableOpacity`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${props => props.theme.colors.lightblue};
  border-radius: 16px;
`
