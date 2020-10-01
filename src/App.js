import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    surName : 'Sahu'
  }

  manipulateStateHandler = (event) => {
    this.setState({ surName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.manipulateStateHandler} surname={this.state.surName}/>
        <UserOutput username="Sumit" 
          surname={this.state.surName} > I am user Output 1</UserOutput>
        <UserOutput username="Jayant" />
        <UserOutput username="Shivam" />
      </div>
    );
  }
}

export default App;
