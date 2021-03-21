import styled from 'styled-components/native'

export const SocialButtonWrap = styled.TouchableOpacity`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${props => props.theme.colors.lightblue};
  border-radius: 16px;
`
