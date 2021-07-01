//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Route exact path="/" component={Home} />
      </header>
    </div>
    </Router>
  );
}

export default App;
