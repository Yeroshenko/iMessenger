import React, { FC } from 'react'

import { DividerProps } from './types'
import { DividerLine, DividerText, DividerWrap } from './styles'

export const Divider: FC<DividerProps> = ({ style, children }) => {
  return (
    <DividerWrap style={style}>
      <DividerLine />
      <DividerText>{children}</DividerText>
      <DividerLine />
    </DividerWrap>
  )
}
