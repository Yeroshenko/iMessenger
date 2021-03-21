import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { Icon } from './Icon'

export class ProfileIcon extends Icon {
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
        <Path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
        <Circle cx={12} cy={7} r={4} />
      </Svg>
    )
  }
}
