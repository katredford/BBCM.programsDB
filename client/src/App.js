import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import ApolloClient from 'apollo-boost';


import Home from "./pages/Home";
import Form from "./pages/Form";
import Activity from "./pages/Activity";
import Login from "./pages/Login";
import Nav from "./components/Nav";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  link: httpLink,
  cache: new InMemoryCache(),
  // uri: '/graphql',
})

function App() {
  return (

    // <p>
    //   Hello Worrld!
    // </p>
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/"
              page={Home}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/activity" component={Activity} />
            {/* <Route exact path="/acitivites/:id" component={Activity} /> */}
          </Switch>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;