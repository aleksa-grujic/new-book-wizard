import React, {useContext, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {BookContext} from "../../context/book-context";
import {DataContext} from "../../context/data-context";

export default function NewSubgenre() {
    const {bookProps, setBookProps} = useContext(BookContext);
    const {data, addSubgenre} = useContext(DataContext);
    const [subgenre, setSubgenre] = useState({
        id: data.genres[data.genres.length - 1].subgenres[data.genres[data.genres.length - 1].subgenres.length - 1].id + 1,
        name: "",
        isDescriptionRequired: false
    });

    useEffect(() => {
        console.log("11testt!", subgenre.name.length);
        return function () {
            if (subgenre.name.length > 0) {
                console.log("fasdfsadfaas", subgenre.name.length);
                addSubgenre(bookProps.genre, subgenre.name, subgenre.isDescriptionRequired);
                setBookProps({...bookProps, subgenre: subgenre.id});
                setSubgenre({
                    id: data.genres[data.genres.length - 1].subgenres[data.genres[data.genres.length - 1].subgenres.length - 1].id + 1,
                    name: "",
                    isDescriptionRequired: false
                });
            }
        }
    }, [])

    return (
        <div style={{margin: '10px'}}>
            <TextField
                fullWidth
                id="newSubgenreName"
                label="Subgenre name"
                variant="filled"
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