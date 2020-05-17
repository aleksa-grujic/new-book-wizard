import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {BookContext} from "../../context/book-context";

const useStyles = makeStyles({
    textField: {
        margin: '10px'
    }
});

export default function InformationForm() {
    const classes = useStyles();
    const {bookProps, setBookProps} = useContext(BookContext);

    const setInfo = (e) => {
        setBookProps({...bookProps, [e.target.id]: e.target.value});
    };

    return  <form style={{margin: '10px'}}>
        <TextField
            id="bookTitle"
            className={classes.textField}
            fullWidth
            label="Book Title"
            variant="filled"
            placeholder="Book Title"
            value={bookProps['bookTitle'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                 shrink: true,
            }}
        />
        <TextField
            id="author"
            className={classes.textField}
            fullWidth
            label="Author"
            variant="filled"
            placeholder="Author"
            value={bookProps['author'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="isbn"
            className={classes.textField}
            fullWidth
            label="ISBN"
            variant="filled"
            placeholder="ISBN"
            value={bookProps['isbn'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="publisher"
            className={classes.textField}
            fullWidth
            label="Publisher"
            variant="filled"
            placeholder="Publisher"
            value={bookProps['publisher'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="datePublished"
            className={classes.textField}
            label="Date Published"
            variant="filled"
            placeholder="Date Published"
            type="date"
            value={bookProps['datePublished'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <br/>
        <TextField
            id="numberOfPages"
            className={classes.textField}
            label="Number of pages"
            variant="filled"
            placeholder="Number of pages"
            type="number"
            value={bookProps['numberOfPages'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <br/>
        <TextField
            id="format"
            className={classes.textField}
            label="Format"
            variant="filled"
            placeholder="Format"
            value={bookProps['format'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <br/>
        <TextField
            id="edition"
            className={classes.textField}
            label="Edition"
            variant="filled"
            placeholder="Edition"
            value={bookProps['edition'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="editionLanguage"
            className={classes.textField}
            label="Edition language"
            variant="filled"
            placeholder="Edition language"
            value={bookProps['editionLanguage'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="description"
            className={classes.textField}
            fullWidth
            label="Description"
            variant="filled"
            placeholder="Description"
            multiline
            rows={4}
            value={bookProps['description'] || ""}
            onChange={setInfo}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </form>
}