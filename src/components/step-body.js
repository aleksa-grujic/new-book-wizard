import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import GenreSelect from "./steps/genre-select";
import SubgenreSelect from "./steps/subgenre-select";
import {BookContext} from "../context/book-context";
import InformationStep from "./steps/information-step";
import NewSubgenre from "./steps/new-subgenre-form";
import {DataContext} from "../context/data-context";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    selectContainer: {
        display: "flex",
        flexWrap: "wrap",
        padding: "20px"
    },
    selectButton: {
        margin: "10px"
    }
}));

export default function StepBody() {
    const classes = useStyles();
    const {bookProps, setBookProps, steps} = useContext(BookContext);
    const {data} = useContext(DataContext);

    function getStepContent(step) {
        switch (step) {
            case 'Genre':
                return <GenreSelect genres={data.genres} bookProps={bookProps} setBookProps={setBookProps}/>
            case 'Subgenre':
                return <SubgenreSelect subgenres={data.genres.find((genre) => genre.id === bookProps.genre).subgenres} bookProps={bookProps} setBookProps={setBookProps}/>;
            case 'New Subgerne':
                return <NewSubgenre />;
            case 'Informations':
                return <InformationStep />;
            default:
                return 'Unknown step';
        }
    }
    return <div>
        {bookProps.activeStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
            </div>
        ) : (
            <div>
                {getStepContent(steps[bookProps.activeStep])}
            </div>
        )}
    </div>
}
