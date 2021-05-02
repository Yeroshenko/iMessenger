import styled from 'styled-components/native'

import { AvatarContainerProps, AvatarLetterProps } from './types'

export const AvatarContainer = styled.View<AvatarContainerProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.colors.dark};
  border-radius: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`

export const AvatarLetters = styled.Text<AvatarLetterProps>`
  font-size: ${props => props.size}px;
  margin-top: -4%;
  font-family: ${props => props.theme.fonts.mainSemiBold};
  color: ${props => props.theme.colors.white};
  text-align: center;
  text-transform: uppercase;
`
