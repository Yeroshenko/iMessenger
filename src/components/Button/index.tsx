import React, { FC } from 'react'

import { ButtonProps } from './types'
import { ButtonText, ButtonWrapper } from './styles'

export const Button: FC<ButtonProps> = ({ title, style, onPress }) => (
  <ButtonWrapper onPress={onPress} style={style} activeOpacity={0.8}>
    <ButtonText>{title}</ButtonText>
  </ButtonWrapper>
)
