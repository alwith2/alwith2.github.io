import React, { Component } from 'react';
import Header from './components/Header';
import Posts from './components/Posts';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Posts />
        </>
    
    );
  }
}

export default App;
