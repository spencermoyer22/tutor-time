
import './App.css';
import studentContext from './utils/studentContext';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <studentContext.Provider > */}
          {/* <Switch> */}
          <div className="App">
            <Navbar />
            <header className="App-header">
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
            </header>
          </div>
          {/* </Switch> */}
        {/* </studentContext.Provider> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
