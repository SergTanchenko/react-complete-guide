import React from 'react';
import "./Person.css"

const person = (props) => {
    const { name, age, children, changed } = props;
    return (
        <div className="Person">
            <p>I'm {name} and I'm {age} years old</p>
            {children && <p>{children}</p>}
            <input type="text" onChange={changed} value={name} />
        </div>
    );
};

export default person;