import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    showPersons: false,
    persons: [
      { id: "qwe1", name: "Nancy", age: "27", hobbies: ["Racing"] },
      { id: "qw2", name: "Peter", age: "18" },
      { id: "q3", name: "Dan", age: "12" }
    ]
  }

  togglePersons = () => {
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons
    }));
  }

  deletePersonHandler = (indexToDelete) => {
    const persons = [...this.state.persons];
    persons.splice(indexToDelete, 1);
    this.setState({ persons });
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { id: "qwe1", name: "Victor", age: "27", hobbies: ["Racing"] },
        { id: "qw2", name: event.target.value, age: "18" },
        { id: "q3", name: "Abcde", age: "12" }
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
        <Cockpit clicked={this.togglePersons.bind(this)} isClicked={this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;
