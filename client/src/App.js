import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { ApolloProvider } from '@apollo/client';
//import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Form from "./pages/Form";
import Activity from "./pages/Activity";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Detail from './pages/Detail';
// import Modal from './components/Modal';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Hero />
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" page={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/activities/:id" component={Detail} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;