import React, {useContext, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {BookContext} from "../../context/book-context";
import {DataContext} from "../../context/data-context";

export default function NewSubgenre() {
    const {bookProps, setBookProps} = useContext(BookContext);
    const {data, addSubgenre, changeSubgenre} = useContext(DataContext);

    const findSubgenre = () => {
        let genre = data.genres.find(genre => genre.id === bookProps.genreId);
        return genre.subgenres.find(subgenre => subgenre.id === bookProps.subgenreId);
    };

    const [subgenre, setSubgenre] = useState({
        id: bookProps.subgenreId || data.genres[data.genres.length - 1].subgenres[data.genres[data.genres.length - 1].subgenres.length - 1].id + 1,
        name: bookProps.subgenreId ? findSubgenre().name : "",
        isDescriptionRequired: bookProps.subgenreId ? findSubgenre().isDescriptionRequired : false,
    });



    useEffect(() => {
        if (subgenre.name.length > 0) {
            if (findSubgenre()) {
                changeSubgenre(bookProps.genreId, subgenre);
            } else {
                addSubgenre(bookProps.genreId, subgenre);
                setBookProps({...bookProps, subgenreId: subgenre.id, isDescriptionRequired: subgenre.isDescriptionRequired});
            }
        }
    })

    return (
        <div style={{margin: '10px'}}>
            <TextField
                fullWidth
                id="newSubgenreName"
                label="Subgenre name"
                variant="filled"variant="filled"
                value={subgenre.name}
                onChange={(e) => {
                    setSubgenre({...subgenre, name: e.target.value})
                }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={subgenre.isDescriptionRequired}
                        onChange={(e) => {setSubgenre({...subgenre, isDescriptionRequired: e.target.checked})}}
                        name="isDescriptionRequired"
                    />
                }
                label="Is description required?"
            />
        </div>
    )
}