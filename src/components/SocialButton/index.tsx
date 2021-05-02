import React, { FC } from 'react'
import { Platform } from 'react-native'

import { SocialButtonProps } from './types'
import { SocialButtonWrap, RippleSocialButtonWrap } from './styles'

const isAndroid = Platform.OS === 'android'


export const SocialButton: FC<SocialButtonProps> = ({ style, onPress, children }) => (
  <>
    {isAndroid
      ? <RippleSocialButtonWrap style={style} onPress={onPress} rippleColor={'rgba(0,0,0,.2)'}>
          {children}
        </RippleSocialButtonWrap>
      : <SocialButtonWrap style={style} onPress={onPress} activeOpacity={0.8}>
          {children}
        </SocialButtonWrap>
    }
  </>
)
