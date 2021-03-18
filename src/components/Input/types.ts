import { KeyboardTypeOptions, ViewStyle } from 'react-native'
import { Control } from 'react-hook-form'

export type InputProps = InputInnerProps & {
  control?: Control<Record<string, any>>
  name?: string
  defaultValue?: string
}

export type InputInnerProps = {
  placeholder?: string
  onChangeText?: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  value?: string
  secureTextEntry?: boolean
  style?: ViewStyle
  autoFocus?: boolean
  ref?: any
}

export type TextInputStyle = {
  isFocused: boolean
}
