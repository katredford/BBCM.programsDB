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
    type Query {
        allActivities: [Activity]
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
            saveActivity(
                activityId: ID!
                activityName: String!
                description: String!
                materials: [String!]
            ): Activity
            deleteActivity(activityId: ID): Activity
        }
`;

// export typeDefs
module.exports = typeDefs;