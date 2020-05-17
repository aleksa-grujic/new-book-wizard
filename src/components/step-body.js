import React, {useContext} from "react";
import GenreSelect from "./steps/genre-select";
import SubgenreSelect from "./steps/subgenre-select";
import {BookContext} from "../context/book-context";
import InformationForm from "./steps/information-form";
import NewSubgenre from "./steps/new-subgenre-form";

export default function StepBody() {
    const {bookProps, steps} = useContext(BookContext);

    function getStepContent(step) {
        switch (step) {
            case 'Genre':
                return <GenreSelect />
            case 'Subgenre':
                return <SubgenreSelect />;
            case 'New Subgerne':
                return <NewSubgenre />;
            case 'Informations':
                return <InformationForm />;
            default:
                return 'Unknown step';
        }
    }
    return (
        <div>
            {getStepContent(steps[bookProps.activeStep])}
        </div>
    )
}
