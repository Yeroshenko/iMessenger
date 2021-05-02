import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { NAVIGATION } from '../constants'
import { theme } from '../global-styles'
import { TabBarIcon } from '../components'

import { Messages } from '../screens/Messages'
import { Profile } from '../screens/Profile'
import { Settings } from '../screens/Settings'

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
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <TabBarIcon color={color} focused={focused}>
              <Icon color={color} name='message-square' size={size} />
            </TabBarIcon>
        }}
      />
      <Tab.Screen
        name={NAVIGATION.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <TabBarIcon color={color} focused={focused}>
              <Icon color={color} name='user' size={size} />
            </TabBarIcon>
        }}
      />
      <Tab.Screen
        name={NAVIGATION.SETTINGS}
        component={Settings}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            <TabBarIcon color={color} focused={focused}>
              <Icon color={color} name='settings' size={size} />
            </TabBarIcon>
        }}
      />
    </Tab.Navigator>
  )
}
