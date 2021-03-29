import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { Icon } from './Icon'

export class SearchIcon extends Icon {
  render() {
    return (
      <Svg width={this.props.size} height={this.props.size} viewBox='0 0 22 22' fill='none'>
        <Circle
          cx={10.786}
          cy={10.786}
          r={8.24}
          stroke={this.props.color}
          strokeWidth={1.37}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M16.517 16.945l3.23 3.222'
          stroke={this.props.color}
          strokeWidth={1.37}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    )
  }
}
