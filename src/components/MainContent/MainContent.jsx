import React, { Component } from 'react';
import { Box, Flex, Text, Card } from '@knotel/cinderblock'

const MainContent = ({word}) => (
    <Flex
    p={2}
    color='black'>
        <Card 
            p={4}
            width={1}
            boxShadowSize='sm'
            borderWidth={1}>
            <Text>definition</Text>
        </Card>
    </Flex>
)
  
export default MainContent