import styled from 'styled-components/native'
import { TextInputStyle } from './types'
import { DefaultTheme } from 'styled-components'

export const InputWrapper = styled.View`
  width: 100%;
  position: relative;
`

export const ErrorText = styled.Text`
  color: ${props => props.theme.colors.error};
  font-family: ${props => props.theme.fonts.mainRegular};
  font-size: 14px;
  margin-left: 12px;
  margin-top: 2px;
`

export const TextInput = styled.TextInput<TextInputStyle>`
  height: 64px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 16px;
  padding: 22px 28px;
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.mainRegular};
  border-width: 3px;
  border-color: ${({ theme, isFocused, hasError }) => getBorderColor(theme, isFocused, hasError)};
`

const getBorderColor = (theme: DefaultTheme, isFocused: boolean, hasError: boolean) => (
  hasError
    ? theme.colors.error
    : isFocused
      ? theme.colors.primary
      : theme.colors.white
)
