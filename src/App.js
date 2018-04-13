import React, { Component } from 'react';

class App extends Component {
  state = {
    test: 1
  }
  
  handleClick = () => {
    console.log('EFERGERGE');
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Hello from App Component
      </div>
    );
  }
}

export default App;