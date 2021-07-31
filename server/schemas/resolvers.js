// require the models

const { AuthenticationError } = require('apollo-server-express');
const { Activity } = require('../models');

const resolvers = {
    Query: {
        allActivities: async () => {
            return await Activity.find();
        }
    }
}


module.exports = resolvers;