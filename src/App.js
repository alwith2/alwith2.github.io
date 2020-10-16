import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.pages = ['Home', 'About Me', 'Blog', 'Projects'];
    this.state={
      currentPage: 3
    }
    this.setPage = this.setPage.bind(this)
  }

setPage(newPageNum){
  console.log('hello');
  this.setState({currentPage: newPageNum })
}



  render() {
    return (
      <div className="App container">
        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
        />
      </div>
    )
  }
}

export default App;
