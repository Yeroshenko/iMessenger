import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const RESPONSIVE = {
  small: width < 341,
  mobile5: width > 315 && width < 341,
  mobile8: width > 342 && width < 375,
  mobile8plus: width > 375 && width < 415,
  tablet: width < 990 && width > 415
}

export const getFontSize = (size: number): number => (RESPONSIVE.small ? size * 0.8 : size)
