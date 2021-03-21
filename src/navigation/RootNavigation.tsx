import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NAVIGATION } from '../constants'
import { Messages } from '../screens/Messages'
import { Profile } from '../screens/Profile'
import { Settings } from '../screens/Settings'
import { MessagesIcon, ProfileIcon } from '../icons'
import { SettingsIcon } from '../icons/Settings'

export const RootNavigation = () => {
  const { Screen, Navigator } = createBottomTabNavigator()

  return (
    <Navigator initialRouteName={NAVIGATION.MESSAGES}>
      <Screen
        name={NAVIGATION.MESSAGES}
        component={Messages}
        options={{ tabBarIcon: ({ color, size }) => <MessagesIcon color={color} size={size} /> }}
      />
      <Screen
        name={NAVIGATION.PROFILE}
        component={Profile}
        options={{ tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} /> }}
      />
      <Screen
        name={NAVIGATION.SETTINGS}
        component={Settings}
        options={{ tabBarIcon: ({ color, size }) => <SettingsIcon color={color} size={size} /> }}
      />
    </Navigator>
  )
}
