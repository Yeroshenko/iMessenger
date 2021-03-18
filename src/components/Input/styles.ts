import styled from 'styled-components/native'
import { TextInputStyle } from './types'

export const InputWrapper = styled.View`
  width: 100%;
  position: relative;
`
export const TextInput = styled.TextInput<TextInputStyle>`
  height: 64px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 16px;
  padding: 22px 28px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.mainRegular};
  border-width: 3px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.white};
`
