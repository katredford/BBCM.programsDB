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
        setUpTime: Int
        tearDownTime: Int
        categories: [String]
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
        searchCategory(search: String): [Activity]
    }
    type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  
		saveActivity(
            activityName: String!
            description: String!
            materials: [String]
		): Activity
        
        deleteActivity(activityId: ID!): Activity
		
	}
`;

// export typeDefs
module.exports = typeDefs;


// login(email: String!, password: String!): User
//     addUser(username: String!, email: String!, password: String!): User