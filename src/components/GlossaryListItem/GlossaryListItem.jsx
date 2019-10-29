import React, { Component } from 'react';
import { Box, Flex, Text } from '@knotel/cinderblock'

const GlossaryListItem = ({word}) => {
    return (
      <Text>
        {word.word}
      </Text>
    )
  }
  
  export default GlossaryListItem;
  