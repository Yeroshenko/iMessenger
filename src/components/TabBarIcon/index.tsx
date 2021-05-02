import React, { FC } from 'react'

import { TabBarIconProps } from './types'
import { Container, Dot } from './styles'

export const TabBarIcon: FC<TabBarIconProps> = ({ focused, color, children }) => (
  <Container>
    {children}
    <Dot focused={focused} color={color} />
  </Container>
)

