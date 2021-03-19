import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NAVIGATION } from '../constants'
import { Messages } from '../screens/Messages'
import { Profile } from '../screens/Profile'
import { Settings } from '../screens/Settings'

export const RootNavigation = () => {
  const { Screen, Navigator } = createBottomTabNavigator()

  return (
    <Navigator>
      <Screen name={NAVIGATION.MESSAGES} component={Messages} />
      <Screen name={NAVIGATION.PROFILE} component={Profile} />
      <Screen name={NAVIGATION.SETTINGS} component={Settings} />
    </Navigator>
  )
}
