import { ViewStyle } from 'react-native'

export type ButtonType = 'primary' | 'ghost'

export type ButtonProps = {
  title: string
  onPress?: () => void | Promise<any>
  style?: ViewStyle
  type?: ButtonType
}

export type ButtonStylesProps = {
  style?: ViewStyle
  type: ButtonType
}
