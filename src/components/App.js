import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import SingleItem from './single_item';

class App extends Component {
  render() {// the '/' means home, so for the home page, List component will be rendered
    return (
      <div className="container">
          <Route path='/' exact component={List}/>
          <Route path="/add" component={AddItem}/>
          <Route path="/item/:itemID" component={SingleItem}/>{/*The : acts as parameter for path name*/}
      </div>
    );
  }
}

export default App;