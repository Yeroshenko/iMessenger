import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NAVIGATION } from '../constants'
import { Messages } from '../screens/Messages'
import { Profile } from '../screens/Profile'
import { Settings } from '../screens/Settings'
import { MessagesIcon, ProfileIcon, SettingsIcon } from '../icons'
import { theme } from '../global-styles'

export const RootNavigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.MESSAGES}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.dark,
        tabStyle: {
          paddingHorizontal: 10
        },
        style: {
          backgroundColor: theme.colors.ultraWhite,
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          zIndex: 10
        }
      }}>
      <Tab.Screen
        name={NAVIGATION.MESSAGES}
        component={Messages}
        options={{ tabBarIcon: ({ color, size }) => <MessagesIcon color={color} size={size} /> }}
      />
      <Tab.Screen
        name={NAVIGATION.PROFILE}
        component={Profile}
        options={{ tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} /> }}
      />
      <Tab.Screen
        name={NAVIGATION.SETTINGS}
        component={Settings}
        options={{ tabBarIcon: ({ color, size }) => <SettingsIcon color={color} size={size} /> }}
      />
    </Tab.Navigator>
  )
}
