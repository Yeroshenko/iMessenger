import React, { FC } from 'react'
// @ts-ignore
import RNProgressLoader from 'rn-progress-loader'
import { theme } from '../../global-styles'
import { ProgressLoaderProps } from './types'


export const ProgressLoader: FC<ProgressLoaderProps> = ({ visible }) => (
  <RNProgressLoader
    visible={visible}
    isModal={true}
    isHUD={true}
    hudColor={theme.colors.white}
    color={theme.colors.dark}
  />
)

