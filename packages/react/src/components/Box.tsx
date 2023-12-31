import { Component, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  color: '$white',
})

export interface BoxProps extends Component<typeof Box> {
  as?: ElementType
}
