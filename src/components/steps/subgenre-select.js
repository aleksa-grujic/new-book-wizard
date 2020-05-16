import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    selectContainer: {
        display: "flex",
        flexWrap: "wrap",
        padding: "20px"
    },
    selectButton: {
        margin: "10px"
    }
});

export default function SubgenreSelect({subgenres, bookProps, setBookProps}) {
    const classes = useStyles();

    return <div className={classes.selectContainer}>
        {subgenres.map((subgenre) =>
            <Button
                key={subgenre.id}
                className={classes.selectButton}
                variant={bookProps.subgenre === subgenre.id ? "contained" : "outlined"}
                color="default"
                onClick={() => setBookProps({...bookProps, subgenre: subgenre.id, newSubgenre: false})}
            >
                {subgenre.name}
            </Button>
        )}
        <Button
            key={'newSubgenre'}
            className={classes.selectButton}
            variant={bookProps.newSubgenre ? "contained" : "outlined"}
            color="default"
            onClick={() => setBookProps({...bookProps, subgenre: null, newSubgenre: true})}
        >
            Add new
        </Button>
    </div>;
}