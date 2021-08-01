// require the models

const { AuthenticationError } = require('apollo-server-express');
const { Activity, User } = require('../models');

const resolvers = {
    Query: {
        allActivities: async () => {
            return Activity.find();

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
}
  }  
}

module.exports = resolvers;