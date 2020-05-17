import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {BookContext} from "../context/book-context";

const useStyles = makeStyles({
    root: {
        textAlign: 'right',
    },
    backButton: {
        marginRight: '15px',
    }
});
export default function StepNavigation() {
    const classes = useStyles();
    const {bookProps, steps, handleReset, handleBack, handleNext} = useContext(BookContext);

    const isNextDisabled = () => {
        switch (steps[bookProps.activeStep]) {
            case 'Genre' :
                return !bookProps.genreId;
            case 'Subgenre' :
                if (bookProps.subgenreId) {
                    return false;
                }
                return !bookProps.newSubgenre;
            case 'Informations' :
                return !(
                    bookProps.bookTitle.length > 0 &&
                    bookProps.author.length > 0 &&
                    bookProps.publisher.length > 0 &&
                    bookProps.datePublished.length > 0 &&
                    bookProps.numberOfPages > 0 &&
                    bookProps.format.length > 0 &&
                    bookProps.edition.length > 0 &&
                    bookProps.editionLanguage.length > 0 &&
                    (bookProps.isDescriptionRequired ? bookProps.description.length > 0 : true)
                )

            default : return false;
        }
    }

    return (
            <div className={classes.root}>
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