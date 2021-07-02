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
import Navbar from './components/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
      <Route exact path="/" component={Home} />
      </header>
    </div>
    </Router>
  );
}

export default App;
