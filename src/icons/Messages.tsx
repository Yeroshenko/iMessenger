import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Icon } from './Icon'

export class MessagesIcon extends Icon {
  render() {
    return (
      <Svg
        width={this.props.size}
        height={this.props.size}
        viewBox='0 0 24 24'
        fill='none'
        stroke={this.props.color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <Path d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' />
      </Svg>
    )
  }
}
