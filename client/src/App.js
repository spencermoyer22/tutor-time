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
import AppNavbar from './components/Nav';

function App() {
  return (
    <Router>
    <AppNavbar />
    </Router>
  );
}

export default App;
