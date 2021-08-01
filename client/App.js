import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./src/pages/Home";
import Form from "./src/pages/Form";
import Activity from "./src/pages/Activity";
import Login from "./src/pages/Login";
import Nav from "./src/components/Nav";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
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
              component={Home}
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