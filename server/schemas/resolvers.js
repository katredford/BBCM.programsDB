// require the models

const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        addActivity: async (parent, args, context) => {
            if(context.activity) {
                const activityData = await Activity.findOne({ _id: context.activity._id })
                    .select('-__v')
                    .populate('allActivities')
            }
        }
    }
}

module.exports = resolvers;