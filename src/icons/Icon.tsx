import { Component } from 'react'

import { IconProps } from './types'
import { theme } from '../global-styles'

export class Icon extends Component<IconProps, {}> {
  static defaultProps = {
    size: 24,
    color: theme.colors.dark
  }
}
