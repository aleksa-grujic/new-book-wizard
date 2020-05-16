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

export default function GenreSelect({genres, bookProps, setBookProps}) {
    const classes = useStyles();

    return <div className={classes.selectContainer}>
        {genres.map((genre) =>
            <Button
                key={genre.id}
                className={classes.selectButton}
                variant={bookProps.genre === genre.id ? "contained" : "outlined"}
                color="default"
                onClick={() => {
                    setBookProps({...bookProps, genre: genre.id})
                }}
            >
                {genre.name}
            </Button>
        )}
    </div>;
}