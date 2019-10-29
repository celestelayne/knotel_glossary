import React, { Component } from 'react';
import { ThemeProvider, Box, Flex } from '@knotel/cinderblock'

import Nav from './components/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

import './App.css';

const words = [

  {
    word: 'floor',
    definition: 'The base unit for what we deliver as a product. We build and fit a floor, not building, we put members on a floor.',
  },
  {
    word: 'member',
    definition: 'A company that pays to be in Knotel space and use our services.',
  }

]

function App() {
  return (
    <ThemeProvider>
      <Box>
        <Nav/>
        <Flex>
          <Box px={3} width={1 / 4}>
            <Sidebar words={words} />
          </Box>
          <Box px={3} width={3 / 4}>
            <MainContent words={words}/>
          </Box>
        </Flex>
      </Box>
    </ThemeProvider>
  );
}

export default App;
