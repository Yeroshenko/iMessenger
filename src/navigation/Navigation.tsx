import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigation } from './AuthNavigation'
import { RootNavigation } from './RootNavigation'

const isAuth = false

export const Navigation: FC = () => (
  <NavigationContainer>{isAuth ? <RootNavigation /> : <AuthNavigation />}</NavigationContainer>
)
