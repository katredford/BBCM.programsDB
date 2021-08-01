// require the models

const {
    AuthenticationError
} = require('apollo-server-express');
const {
    Activity
} = require('../models');


const resolvers = {
    Query: {
        allActivities: async () => {
            return Activity.find();

        }
    },
    Mutation: {
        addActivity: async (parent, args, context) => {
            if (context.activity) {
                const activityData = await Activity.findOne({ _id: context.activity._id })
                    .select('-__v')
                    .populate('allActivities')
            }
        }
    }
}

module.exports = resolvers;