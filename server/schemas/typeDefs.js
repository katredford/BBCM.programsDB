const {
    gql
} = require('apollo-server-express');


// create the typeDefs
const typeDefs = gql `
    type Activity {
        _id: ID!
        activityName: String!
        description: String
        materials: [String]
        setUpTime: Int
        tearDownTime: Int
        categories: [String]
    }

    type User {
		_id: ID
		username: String
		email: String
	}

    type DeleteMessage {
        message: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
		me: User
		users: [User]
		user(username: String!): User
        allActivities(username: String): [Activity]
        singleActivity(_id: ID!): Activity
        searchCategory(search: String): [Activity]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): User
        addActivity(activityName: String!, description: String, materials: [String], setUpTime: Int, tearDownTime: Int, categories: [String]): Activity
        
        deleteActivity(activityId: ID!): Activity	
	}
`;

// export typeDefs
module.exports = typeDefs;


