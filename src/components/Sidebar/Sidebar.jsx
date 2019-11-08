import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Box, Flex } from '@knotel/cinderblock'

import GlossaryListItem from '../GlossaryListItem/GlossaryListItem'

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
                key={id}
                p={3}
                color='black'>
                    <GlossaryListItem term={term}/>
                </Flex>
            })
        }}
    </Query>
)
  
export default Sidebar