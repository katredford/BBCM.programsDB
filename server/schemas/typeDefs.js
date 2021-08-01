const {
    gql
} = require('apollo-server-express');


// create the typeDefs
const typeDefs = gql `
    type Activity {
        _id: ID!
        activityName: String!
        description: String!
        materials: [String]
        setUpTime: Int!
        tearDownTime: Int!
    }

    type User {
		_id: ID
		username: String
		email: String
	}

    type Query {
		me: User
		users: [User]
		user(username: String!): User
        allActivities: [Activity]
        activity(_id: ID!): Activity
    }
    type Mutation {
<<<<<<< HEAD
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  
		saveActivity(
            activityName: String!
            description: String!
            materials: [String]
		): Activity
        
        deleteActivity(activityId: ID): Activity
		
	}
=======
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
>>>>>>> 5d8cd2cfd02bbf17d7899d8a773e8d133b35c255
`;

// export typeDefs
module.exports = typeDefs;


// login(email: String!, password: String!): User
//     addUser(username: String!, email: String!, password: String!): User