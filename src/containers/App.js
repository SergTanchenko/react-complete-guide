import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons';

class App extends Component {
  state = {
    showPersons: false,
    persons: [
      { name: "Nancy", age: "27", hobbies: ["Racing"] },
      { name: "Peter", age: "18" },
      { name: "Dan", age: "12" }
    ]
  }

  togglePersons = () => {
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons
    }));
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Victor", age: "27", hobbies: ["Racing"] },
        { name: event.target.value, age: "18" },
        { name: "Abcde", age: "12" }
      ]
    });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.onChangeHandler}
        />
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersons.bind(this)}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
