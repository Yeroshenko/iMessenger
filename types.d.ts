import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      ultraWhite: string
      white: string
      lightblue: string
      primary: string
      grey: string
      dark: string
      success: string
    }
    fonts: {
      mainLight: string
      mainLightItalic: string
      mainRegular: string
      mainRegularItalic: string
      mainMedium: string
      mainMediumItalic: string
      mainSemiBold: string
      mainSemiBoldItalic: string
      mainBold: string
      mainBoldItalic: string
    }
  }
}
