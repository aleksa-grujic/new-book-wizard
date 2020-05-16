import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StepCounter from "./step-counter";
import StepNavigation from "./step-navigation";
import StepBody from "./step-body";
import BookContextProvider from "../context/book-context";
import DataContextProvider from "../context/data-context";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    }
}));

export default function WizardContainer() {
    const classes = useStyles();

    return (
        <BookContextProvider>
            <DataContextProvider>
                <div className={classes.root}>
                    <StepCounter />
                    <div>
                        <StepBody />
                        <StepNavigation />
                    </div>
                </div>
            </DataContextProvider>
        </BookContextProvider>
    );
}