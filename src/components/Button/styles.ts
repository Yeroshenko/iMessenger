import styled from 'styled-components/native'
import { ButtonStylesProps } from './types'

// COMPONENTS =================================================
export const ButtonWrapper = styled.TouchableOpacity<ButtonStylesProps>`
  width: 100%;
  padding: 22px 16px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 16px;
`

export const ButtonText = styled.Text<ButtonStylesProps>`
  font-family: ${props => props.theme.fonts.mainBold};
  color: ${props => props.theme.colors.ultraWhite};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`

// HELPERS =================================================
// const typeToBg = (type: ButtonType, theme: DefaultTheme) => {
//   switch (type) {
//     case 'default':
//       return theme.colors.defaultBtn
//
//     case 'primary':
//       return theme.colors.primary
//   }
// }
//
// const typeToColor = (type: ButtonType, theme: DefaultTheme) => {
//   switch (type) {
//     case 'default':
//       return theme.colors.main
//
//     case 'primary':
//       return theme.colors.white
//   }
// }
