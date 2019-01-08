import React from "react";
import Person from "./Person/Person"

const persons = (props) => props.persons.map(
    (person, index) => <Person
        click={() => props.clicked}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
    >
        {person.hobbies}
    </Person >
);

export default persons;