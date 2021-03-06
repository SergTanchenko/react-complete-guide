import React from "react";
import Person from "./Person/Person"

const persons = (props) => props.persons.map(
    (person, index) => <Person
        key={person.id}
        clicked={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
    >
        {person.hobbies}
    </Person >
);

export default persons;