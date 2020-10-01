import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    surName: 'Sahu',
    inputLength: 0,
    character: ''
  }

  manipulateStateHandler = (event) => {
    this.setState({ surName: event.target.value });
  }

  inputLengthHandler = (event) => {
    this.setState({ inputLength: event.target.value.length });
    this.setState({ character: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.character.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({character: updatedText});
  }

  render() {
 
    const charList = this.state.character.split('').map((char, index) => {
      return <CharComponent 
              chara={char} 
              key={index} 
              clicked={() => this.deleteCharHandler(index)}/>
    })
  
    return (
      <div className="App">
        <UserInput changed={this.manipulateStateHandler} surname={this.state.surName} />
        <UserOutput username="Sumit"
          surname={this.state.surName} > I am user Output 1</UserOutput>
        <UserOutput username="Jayant" />
        <UserOutput username="Shivam" />
        <input onChange={this.inputLengthHandler} value={this.state.character}/>
        <p>{this.state.inputLength}</p>
        <ValidationComponent charLength={this.state.inputLength} />
        {charList}
      </div>
    );
  }
}

export default App;
