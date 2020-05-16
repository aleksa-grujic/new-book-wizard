import React, {useContext} from "react";
import {BookContext} from "../context/book-context";

export default function StepCounter() {
    const {bookProps, steps} = useContext(BookContext);

    const setClassNames = (index) => {
        let classes = '';
        if (bookProps.activeStep >= index) {
            classes += "active ";
        }
        if (bookProps.activeStep < 2 && index === steps.length - 1) {
            classes += "other "
        }
        return classes;
    };

    return <ul className="progressbar">
        {steps.map((label, index) => (
            <li key={label} className={setClassNames(index)} >
                {label === "..." ? <span>&nbsp;</span> : label}
            </li>
        ))}
    </ul>
}