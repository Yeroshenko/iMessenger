import styled from 'styled-components/native'

import { TabBarIconProps } from './types'

export const Container = styled.View`
  display: flex;
  align-items: center;
`

export const Dot = styled.View<TabBarIconProps>`
  width: 4px;
  height: 4px;
  background-color: ${props => props.color};
  margin-top: 8px;
  border-radius: 4px;
  opacity: ${props => props.focused ? 1 : 0};
`
