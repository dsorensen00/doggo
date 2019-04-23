import React, { Component } from 'react';
import Routing from './Components/Routing'
import Navbar from './Components/Navbar';
import '../src/index.css'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routing />
      </>
    );
  }
}

export default App;
