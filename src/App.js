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
    // TODO: updated the state 
  }

  render() {
    const persons = this.state.persons.map(
      (person) => <Person name={person.name} age={person.age}>{person.hobbies}</Person>
    );

    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
