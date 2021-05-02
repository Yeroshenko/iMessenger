import React from 'react'
import { Alert  } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


import { DialogItem, ScreenLayout } from '../../components'
import { theme } from '../../global-styles'

export const Messages = () => {
  return (
    <ScreenLayout
      title='Messages'
      right={<Icon size={22} name='search' color={theme.colors.dark} />}
      onRightButtonPress={() => Alert.alert('click')}
    >
      <DialogItem />
    </ScreenLayout>
  )
}
