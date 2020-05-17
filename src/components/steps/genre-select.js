import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {DataContext} from "../../context/data-context";
import {BookContext} from "../../context/book-context";

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

export default function GenreSelect() {
    const classes = useStyles();
    const {data} = useContext(DataContext);
    const {bookProps, setBookProps} = useContext(BookContext);

    const genres = data.genres;
    return <div className={classes.selectContainer}>
        {genres.map((genre) =>
            <Button
                key={genre.id}
                className={classes.selectButton}
                variant={bookProps.genreId === genre.id ? "contained" : "outlined"}
                color="default"
                onClick={() => {
                    setBookProps({...bookProps, genreId: genre.id})
                }}
            >
                {genre.name}
            </Button>
        )}
    </div>;
}