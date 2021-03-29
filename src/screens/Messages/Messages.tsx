import React from 'react'
import { ScreenLayout } from '../../components'
import { SearchIcon } from '../../icons'
import { Text } from 'react-native'

export const Messages = () => {
  return (
    <ScreenLayout title='Messages' right={<SearchIcon size={22} />}
                  onRightButtonPress={() => console.log('click')}>
      <Text>Messages List</Text>
    </ScreenLayout>
  )
}
