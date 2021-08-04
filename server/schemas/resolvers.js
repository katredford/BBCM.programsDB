// require the models

const { AuthenticationError } = require('apollo-server-express');
const { Activity, User } = require('../models');

const resolvers = {
  Query: {
    allActivities: async () => {
      return Activity.find();

    },
    singleActivity: async (parent, { _id }, context)=> {
      console.log('WE HIT SINGLE ACTIVITY!!')
      const activity = await Activity.findById(_id)
      console.log('Activity we found!!!', activity)
      return activity

    },
    searchCategory: async (parent, { search }, context) => {

      const activities = await Activity.find({ "categories": { "$regex": search, "$options": "i" } })

      console.log('activities', activities)
  
    
      return activities
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
            
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        
    },
             
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
       
    },
        
  },
  Mutation: {
    addActivity: async (parent, args) => {
      console.log('we hit the save activity!!!', args)
      const activity = await Activity.create(args);

      return activity;
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
      
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {

        throw new AuthenticationError('Incorrect credentials');
      }

      return user;
    },

    //    deleteActivity: async (parent, { activityId }) => {
    //     console.log('delete delete delete!!!', { activityId })
    //     const activity = await Activity._id.findeOneAndDelete( { activityId });

    //   return activity;
    // },
    // deleteActivity: async (parent, { activityId }, context) => {
    //   {
    //     const deleteActivity = await Activity.findOneAndRemove({
    //       _id: activityId,
    //     })
      
        deleteActivity: async (root, { activityId, activityName  }, { mongo: { Activity }, user }) => {
  return await Activity.deleteOne({ activityId, activityName });
},
    // return deleteActivity;
    
        //  deleteActivity: async (
        // 			parent,
        // 			{ activityId },
        // 			context
        // 		) => {
        // 			if (context.activity) {
        // 				await Activity.findByIdAndDelete(
        // 					{ _id: context.activity._id },
					
        // 				);

        // 				return Activity;
        // 			}
			
        // 		},
      }
    
  
}
module.exports = resolvers;