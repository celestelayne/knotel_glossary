import React, { Component } from 'react';
import { Box, Flex, Text } from '@knotel/cinderblock'

const Nav = props => (
    <Flex
    p={3}
    align='center'
    color='white'
    bg='blue'>
        <Text
            bold
            mx={2}>
            Hello
        </Text>
        <Text
            ml='auto'
            mr={2}>
            Glossary
        </Text>
    </Flex>
)
  
export default Nav