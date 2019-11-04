const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const PORT = process.env.PORT || 4000

const TERMS = [

    {
      id: 1,
      name: 'floor',
      definition: 'The base unit for what we deliver as a product. We build and fit a floor, not building, we put members on a floor.',
    },
    {
      id: 2,
      name: 'member',
      definition: 'A company that pays to be in Knotel space and use our services.',
    },
    {
        id: 3,
        name: 'ARR',
        definition: 'Annual Recurring Revenue',
    },
    {
        id: 4,
        name: 'Loss Factor',
        definition: 'A percentage that represents the difference between the rentable square feet (what the tenant pays for) and the usable floor area (after the columns, radiators, stairways or elevators have been subtracted from the measurement.',
    },
  ]

const schema = buildSchema(`
    type Query {
        term(id: ID!): Term
        terms: [Term]
    }

    type Term {
        id: ID
        name: String
        definition: String
    }
`)

const getTerms = (term) => {
    return TERMS.map(term => term) 
}

const getTerm = (term) => {
    console.log(term.id)
    let id = term.id
    return TERMS.filter(num => num.id == id).shift()
}

const root = {
    terms: getTerms,
    term: getTerm
}

const app = express()
const cors = require('cors')

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Knotel app listening on port ${PORT}!`))