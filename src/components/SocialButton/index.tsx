import React, { FC } from 'react'

import { SocialButtonProps } from './types'
import { SocialButtonWrap } from './styles'

export const SocialButton: FC<SocialButtonProps> = ({ style, onPress, children }) => (
  <SocialButtonWrap style={style} onPress={onPress}>
    {children}
  </SocialButtonWrap>
)
