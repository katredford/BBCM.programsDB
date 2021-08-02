// require the models

const { AuthenticationError } = require('apollo-server-express');
const { Activity, User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    allActivities: async () => {
      return Activity.find();

    },
    searchCategory: async (parent, { search }, context) => {

      const activites = await Activity.find({ "categories": { "$regex": search, "$options": "i" } })

      console.log('Activites', activites)
  
    
      return activites
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
    saveActivity: async (parent, args) => {
      console.log('we hit the save activity!!!', args)
      const activity = await Activity.create(args);

      return activity;
    },

    addUser: async (parent, args) => {
      console.log('ADD USER!!!', args)
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

      const token = signToken(user);
      return { token, user };
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
      
    deleteActivity: async (root, { activityId }) => {
      console.log('We r in the resolver delete!!!', activityId)
          
      let message = await Activity.remove({ _id: activityId }, function (err) {
        console.log('We deleted!!!', err)
        return 'U r deleted!'
      });
   

      message = { message: 'U r deleted!' }
      console.log('message!!', message)
      return message
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