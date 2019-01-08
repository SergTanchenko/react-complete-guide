import React from 'react';

const person = (props) => {
    const { name, age, children } = props;
    return (
        <div>
            <p>I'm {name} and I'm {age} years old</p>
            {children && <p>{children}</p>}
        </div>
    );
};

export default person;