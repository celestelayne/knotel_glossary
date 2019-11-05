import React, { Component } from 'react';
import { Box, Flex, Text } from '@knotel/cinderblock'

const GlossaryListItem = (props) => {
    return (
      <Text>
        {props.term.name}
      </Text>
    )
  }
  
  export default GlossaryListItem;
  