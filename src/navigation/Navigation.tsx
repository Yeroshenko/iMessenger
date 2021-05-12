import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigation } from './AuthNavigation'
import { RootNavigation } from './RootNavigation'
import { AppState } from '../store'

export const Navigation: FC = () => {
  const { user } = useSelector((state: AppState) => state.auth)

  return (
    <NavigationContainer>
      {!!user
        ? <RootNavigation />
        : <AuthNavigation />
      }
    </NavigationContainer>
  )

}
