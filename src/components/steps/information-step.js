import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InformationStep() {
    return  <form>
        <TextField id="book-title" fullWidth label="Book Title" />
        <TextField id="author" fullWidth label="Author" />
        <TextField id="isbn" fullWidth label="ISBN" />
        <TextField id="publisher" fullWidth label="Publisher" />
        <TextField id="date" label="Date Published" type="date"/>
    </form>
}