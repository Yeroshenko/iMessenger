import React, { FC } from 'react'

import { Avatar } from '../Avatar'
import { Container, Info, LastMessage, LastSeen, MessagesCount, OnlineBadge, Profile, Status, UserName } from './styles'

export const DialogItem: FC = () => (
  <Container>
    <Profile>
      <Avatar letters='VY' uri='https://aif-s3.aif.ru/images/017/557/67943d887ad492c692fc9b73a087c43e.jpg' />
      <OnlineBadge />
    </Profile>
    <Info>
      <UserName numberOfLines={1} ellipsizeMode='tail'>Ivan Face</UserName>
      <LastMessage numberOfLines={2} ellipsizeMode='tail'>
        Но теперь после школы я переехал в другой город учиться. Вакансий тут нет.
      </LastMessage>
    </Info>
    <Status>
      <LastSeen>20 min.</LastSeen>
      <MessagesCount>4</MessagesCount>
    </Status>
  </Container>
)

