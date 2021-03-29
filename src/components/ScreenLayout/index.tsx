import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Title } from '../Title'
import { ScreenLayoutProps } from './types'
import { InnerWrapper, LayoutHeader } from './styles'

export const ScreenLayout: FC<ScreenLayoutProps> = (
  {
    children,
    title,
    right,
    onRightButtonPress
  }
) => (
  <InnerWrapper>
    <LayoutHeader>
      {title && <Title>{title}</Title>}
      {right && onRightButtonPress
        ? <TouchableOpacity onPress={onRightButtonPress}>{right}</TouchableOpacity>
        : <View>{right}</View>
      }
    </LayoutHeader>
    {children}
  </InnerWrapper>
)
