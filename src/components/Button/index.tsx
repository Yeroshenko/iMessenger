import React, { FC } from 'react'
import { Platform } from 'react-native'

import { ButtonProps } from './types'
import { ButtonText, ButtonWrapper, RippleButtonWrapper } from './styles'

const isAndroid = Platform.OS === 'android'

export const Button: FC<ButtonProps> = ({ title, style, onPress, type = 'primary' }) => (
  <>
    {isAndroid
      ? <RippleButtonWrapper rippleColor={'rgba(0,0,0,.2)'} onPress={onPress} style={style} type={type}>
          <ButtonText type={type}>{title}</ButtonText>
        </RippleButtonWrapper>

      : <ButtonWrapper onPress={onPress} style={style} activeOpacity={0.8} type={type}>
          <ButtonText type={type}>{title}</ButtonText>
        </ButtonWrapper>
    }
  </>
)
