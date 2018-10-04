import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import List from './list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="center">To Do App</h1>

        <Route path='/' exact Component={List}/>
        <List/>
      </div>
    );
  }
}

export default App;
