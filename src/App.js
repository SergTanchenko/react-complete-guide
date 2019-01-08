import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Nancy", age: "27", hobbies: ["Racing"] },
      { name: "Peter", age: "18" },
      { name: "Dan", age: "12" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Victor", age: "27", hobbies: ["Racing"] },
        { name: newName, age: "18" },
        { name: "Abcde", age: "12" }
      ]
    });
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
    const persons = this.state.persons.map(
      (person) => <Person
        name={person.name}
        age={person.age}
        changed={this.onChangeHandler}
      >
        {person.hobbies}
      </Person >
    );

    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Anonimous")}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
