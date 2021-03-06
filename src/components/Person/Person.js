import React from 'react';
import classes from "./Person.module.css";

const person = (props) => {
    const { name, age, children, clicked, changed } = props;
    return (
        <div className={classes.Person} onClick={clicked}>
            <p>I'm {name} and I'm {age} years old</p>
            {children && <p>{children}</p>}
            <input type="text" onChange={changed} value={name} />
        </div>
    );
};

export default person;