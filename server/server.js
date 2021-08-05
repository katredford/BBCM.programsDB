const path = require('path')
const express = require('express');
// import ApolloServer
const {
  ApolloServer
} = require('apollo-server-express');
// import our typeDefs and resolvers
const {
  typeDefs,
  resolvers
} = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const {Activity} = require('./models')

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

async function startApolloServer() {

  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({
    app
  });
  app.use(express.urlencoded({
    extended: false
  }));
  app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);

      //Activity.create({activityName: 'Drawing', description: 'art time is my fav time', materials: ['pens', 'paper'], categories: ['art']})

      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
      // if we're in production, serve client/build as static assets
      if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
      }
    });
  })
}

startApolloServer();
