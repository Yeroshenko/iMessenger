import React from 'react'
import { StatusBar, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Navigation } from './src/navigation/Navigation'
import { theme } from './src/global-styles'
import { statusBarHeight } from './src/utils'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.ultraWhite} barStyle={'dark-content'} />
      <View style={{ paddingTop: statusBarHeight(), flex: 1 }}>
        <Navigation />
      </View>
    </ThemeProvider>
  )
}
