import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    const btnClasses = [];

    if (props.isClicked) {
        btnClasses.push(classes.selected);
    }

    return <div className={classes.Cockpit}>
        <button className={btnClasses} onClick={props.clicked}>
            Toggle Persons
            </button>
    </div>;
}

export default cockpit;