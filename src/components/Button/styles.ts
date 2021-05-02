import styled from 'styled-components/native'
import { ButtonStylesProps, ButtonType } from './types'
import { BaseButton } from 'react-native-gesture-handler'
import { DefaultTheme } from 'styled-components'

// COMPONENTS =================================================
export const RippleButtonWrapper = styled(BaseButton)<ButtonStylesProps>`
  width: 100%;
  padding: 22px 16px;
  background-color: ${props => typeToBg(props.type, props.theme)};
  border-radius: 16px;
`

export const ButtonWrapper = styled.TouchableHighlight<ButtonStylesProps>`
  width: 100%;
  padding: 22px 16px;
  background-color: ${props => typeToBg(props.type, props.theme)};
  border-radius: 16px;
`

export const ButtonText = styled.Text<ButtonStylesProps>`
  font-family: ${props => props.theme.fonts.mainBold};
  color: ${props => typeToColor(props.type, props.theme)};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`

// HELPERS =================================================
const typeToBg = (type: ButtonType, theme: DefaultTheme) => {
  switch (type) {
    case 'ghost':
      return 'transparent'

    case 'primary':
      return theme.colors.primary
  }
}

const typeToColor = (type: ButtonType, theme: DefaultTheme) => {
  switch (type) {
    case 'ghost':
      return theme.colors.primary

    case 'primary':
      return theme.colors.ultraWhite
  }
}
