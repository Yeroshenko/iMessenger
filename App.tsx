import React, { FC, useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider as StoreProvider } from 'react-redux'
import { Navigation } from './src/navigation/Navigation'
import { theme } from './src/global-styles'
import { statusBarHeight } from './src/utils'
import { persistor, store } from './src/store'
import { checkAuth } from './src/store/slices/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppInner />
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  )
}

// TODO use .env file
const AppInner: FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '925956556129-k2gsv2ftt41fuh81ktqa84enef7k42gt.apps.googleusercontent.com'
    })
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return <>
    <StatusBar backgroundColor={theme.colors.ultraWhite} barStyle={'dark-content'} />
    <View style={{ paddingTop: statusBarHeight(), flex: 1 }}>
      <Navigation />
    </View>
  </>

}
