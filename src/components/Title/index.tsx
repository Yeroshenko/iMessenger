import React, { FC } from 'react'

import { TitleStyle } from './styles'
import { TitleProps } from './types'

export const Title: FC<TitleProps> = ({ children }) => <TitleStyle>{children}</TitleStyle>
