import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BookContext} from "../context/book-context";
import DoneIcon from '@material-ui/icons/Done';
import StepCounter from "./step-counter";
import StepBody from "./step-body";
import StepNavigation from "./step-navigation";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: '1.2em',
        marginBottom: '25px'
    },
    successSection: {
        textAlign: 'center'
    },
    successText: {
        marginTop: '10px',
        marginBottom: '30px'
    },
    circle: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        background: '#3f51b5',
    }
});

export default function StepContainer() {
    const classes = useStyles();
    const {bookProps, steps, handleReset} = useContext(BookContext);

    return (
        <div className={classes.root}>
            {bookProps.activeStep === steps.length ?
            <div className={classes.successSection}>
                <div className={classes.circle}>
                    <DoneIcon fontSize="large"/>
                </div>
                <Typography className={classes.successText}>Book added successfully</Typography>
                <Button variant="contained" color="primary" onClick={handleReset}>
                    Add another book
                </Button>
            </div> :
             <>
                 <h1 className={classes.heading}>Add book - New book</h1>
                 <StepCounter />
                 <div>
                     <StepBody />
                     <StepNavigation />
                 </div>
             </>
            }
        </div>
    );
}