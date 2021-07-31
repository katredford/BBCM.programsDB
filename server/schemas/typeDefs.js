// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create the typeDefs
const typeDefs = gql`
    type Activity {
        activityId: ID!
        activityName: String!
        description: String!
        materials: [String!]
        setUpTime: Int!
        tearDownTime: Int!
    }
`;

// export typeDefs
module.exports = typeDefs;