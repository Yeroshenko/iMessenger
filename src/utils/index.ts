import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const statusBarHeight = () => Platform.OS === 'android' ? 0 : getStatusBarHeight()
