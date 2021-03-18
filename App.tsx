import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Navigation } from './src/navigation/Navigation'
import { theme } from './src/global-styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.ultraWhite} barStyle={'dark-content'} />
      <Navigation />
    </ThemeProvider>
  )
}
