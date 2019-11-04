import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Box, Flex, Text } from '@knotel/cinderblock'

const GET_TERMS = gql`{
    terms {
        id
        name
        definition
    }
}`


const Sidebar = () => (

    <Query query={GET_TERMS}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return error.message;

            const { terms } = data;
            console.log(terms)
            return terms.map((term, id) => {
                return <Flex
                key={term.id}
                p={2}
                color='black'>
                    <Box>{term.name}</Box>
                </Flex>
            })
        }}
    </Query>
)
  
export default Sidebar