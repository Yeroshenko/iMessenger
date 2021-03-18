import React, { FC } from 'react'

import { ScreenContainerProps } from './types'
import { ScreenContainerInner } from './styles'

export const ScreenContainer: FC<ScreenContainerProps> = ({ style, children }) => (
  <ScreenContainerInner contentContainerStyle={{ paddingBottom: 20 }} style={style}>
    {children}
  </ScreenContainerInner>
)
