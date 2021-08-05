import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';


import Footer from './components/Footer';

import Home from "./pages/Home";
import ActivityForm from "./pages/Form";
import Login from "./pages/Login";
import Detail from './pages/Detail';
import ActivityList from "./components/ActivityList";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  //uri: '/graphql',
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Home />
          {/* <Header />
          <Hero /> */}
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" page={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/form" component={ActivityForm} />
            <Route exact path="/activity" component={ActivityList} />
            <Route exact path="/activities/:id" component={Detail} />
          </Switch>          
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;