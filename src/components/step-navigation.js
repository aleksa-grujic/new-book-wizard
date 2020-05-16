import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {BookContext} from "../context/book-context";

const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
export default function StepNavigation() {
    const classes = useStyles();
    const {bookProps, steps, handleReset, handleBack, handleNext} = useContext(BookContext);

    const isNextDisabled = () => {
        switch (bookProps.activeStep) {
            case 0 :
                return !bookProps.genre;
            case 1 :
                if (bookProps.subgenre) {
                    return false;
                }
                return !bookProps.newSubgenre;
            default : return false;
        }
    }

    return (
            <div>
            {bookProps.activeStep === steps.length ? (
                <div>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
            ) : (
                <div>
                    <div>
                        <Button
                            disabled={bookProps.activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" disabled={isNextDisabled()} onClick={handleNext}>
                            {bookProps.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </div>
            )}
            </div>
    )
}