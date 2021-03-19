import React, { FC } from 'react'
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  TransitionSpecs
} from '@react-navigation/stack'

import { SignIn, SignUp } from '../screens/Auth'
import { NAVIGATION } from '../constants'

const { Navigator, Screen } = createStackNavigator()

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, layouts }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0]
            })
          }
        ]
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5]
        })
      }
    }
  }
}

export const AuthNavigation: FC = () => (
  <Navigator
    headerMode='none'
    initialRouteName={NAVIGATION.SIGN_IN}
    /*  TODO: Fix ts warning */
    /* @ts-ignore */
    screenOptions={{
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...MyTransition
    }}>
    <Screen name={NAVIGATION.SIGN_IN} component={SignIn} />
    <Screen name={NAVIGATION.SIGN_UP} component={SignUp} />
  </Navigator>
)
