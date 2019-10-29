import React, { Component } from 'react';
import { Box, Flex, Text } from '@knotel/cinderblock'

import GlossaryListItem from '../../components/GlossaryListItem/GlossaryListItem'
import MainContent from '../MainContent/MainContent';

const Sidebar = ({words}) => {

    console.log(words)

    const data = words && words.map((word, index) =>
        <GlossaryListItem key={index} word={word} />
    )

    return (
        <Flex
        p={2}
        color='black'>
            <Box>{data}</Box>
        </Flex>
    )
    
}
  
export default Sidebar