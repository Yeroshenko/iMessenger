import React, { FC } from 'react'

import { AvatarProps } from './types'
import { AvatarContainer, AvatarImage, AvatarLetters } from './styles'

export const Avatar: FC<AvatarProps> = ({ uri, letters, size = 64 }) => (
  <AvatarContainer size={size}>
    {uri
      ? <AvatarImage source={{ uri }} />
      : <AvatarLetters size={size * 0.4}>{letters}</AvatarLetters>
    }
  </AvatarContainer>
)

