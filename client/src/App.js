
import './App.css';

import {QUERY_STUDENT} from './utils/queries';
import studentContext from './utils/studentContext';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  useQuery
} from '@apollo/client';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Nav';



function App() {

  const {loading, data} = useQuery(QUERY_STUDENT)

  console.log(data)

  return (
   
    <Router>
    <studentContext.Provider value={data} >
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      </header>
    </div>
    </studentContext.Provider>
    </Router>
   
  );
}

export default App;
