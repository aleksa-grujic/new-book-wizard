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

export default function SubgenreSelect() {
    const classes = useStyles();
    const {data} = useContext(DataContext);
    const {bookProps, setBookProps} = useContext(BookContext);

    const subgenres = data.genres.find((genre) => genre.id === bookProps.genreId).subgenres;

    return <div className={classes.selectContainer}>
        {subgenres.map((subgenre) =>
            <Button
                key={subgenre.id}
                className={classes.selectButton}
                variant={bookProps.subgenreId === subgenre.id ? "contained" : "outlined"}
                color="default"
                onClick={() => setBookProps({...bookProps, subgenreId: subgenre.id, isDescriptionRequired: subgenre.isDescriptionRequired, newSubgenre: false})}
            >
                {subgenre.name}
            </Button>
        )}
        <Button
            key={'newSubgenre'}
            className={classes.selectButton}
            variant={bookProps.newSubgenre ? "contained" : "outlined"}
            color="default"
            onClick={() => setBookProps({...bookProps, subgenreId: null, isDescriptionRequired: false, newSubgenre: true})}
        >
            Add new
        </Button>
    </div>;
}