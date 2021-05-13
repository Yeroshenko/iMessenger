import React, { FC } from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Button, ScreenLayout } from '../../components'
import { logout } from '../../store/slices/auth'
import { AppState } from '../../store'

export const Profile: FC = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: AppState) => state.auth)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <ScreenLayout>
      {user &&
        <>
          <Text>{user.displayName}</Text>
          <Text>{user.email}</Text>
        </>
      }
      <Button title='Logout' onPress={logoutHandler} />
    </ScreenLayout>
  )
}
