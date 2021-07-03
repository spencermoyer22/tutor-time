//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Nav';

import {QUERY_STUDENT} from './utils/queries';
import studentContext from './utils/studentContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  const {loading, data} = useQuery(QUERY_STUDENT)

  return (
    <ApolloProvider client={client}>
    <Router>
    <studentContext.Provider value={data.getMe} >
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      </header>
    </div>
    </studentContext.Provider>
    </Router>
    </ApolloProvider>
  );
}

export default App;
