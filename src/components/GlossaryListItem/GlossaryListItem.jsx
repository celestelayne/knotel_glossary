import React from 'react'
import { Text } from '@knotel/cinderblock'

const GlossaryListItem = (props) => {
  return (
    <Text>
      {props.term.name}
    </Text>
  )
}
export default GlossaryListItem
