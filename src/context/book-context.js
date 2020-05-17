import React, {createContext, useContext, useEffect, useState} from 'react';
import {DataContext} from "./data-context";

export const BookContext = createContext({});

export default function BookContextProvider({children}) {
    const newBook = {
        activeStep: 0,
        genreId: null,
        subgenreId: null,
        newSubgenre: false,
        bookTitle: "",
        author: "",
        isbn: "",
        publisher: "",
        datePublished: "",
        numberOfPages: 0,
        format: "",
        edition: "",
        editionLanguage: "",
        description: "",
    };
    const [bookProps, setBookProps] = useState(newBook);
    const [steps, setSteps] = useState(['Genre', 'Subgenre', '...']);
    const {data} = useContext(DataContext);

    const handleNext = () => {
        if (bookProps.activeStep === steps.length - 1) {
            submitBook();
        }
        setBookProps({...bookProps, activeStep: bookProps.activeStep + 1});
    };

    const handleBack = () => {
        setBookProps({...bookProps, activeStep: bookProps.activeStep - 1});
    };

    const handleReset = () => {
        setBookProps(newBook);
    };
    const submitBook = () => {
        let genre = data.genres.find(genre => genre.id === bookProps.genreId);
        let subgenre = genre.subgenres.find(subgenre => subgenre.id === bookProps.subgenreId);

        let book = {
            ...bookProps,
            genreName: genre.name,
            subgenreName: subgenre.name,
            isDescriptionRequired: subgenre.isDescriptionRequired,
        }
        delete book.activeStep;
        let request = new Request('http://localhost:3000/addBook', {
            method: 'POST',
            body: book
        });
        console.log(request);
    };

    useEffect(() => {
        if (bookProps.activeStep <= 1) {
            setSteps(['Genre', 'Subgenre', '...']);
        }
        if (bookProps.activeStep === 2) {
            setSteps(['Genre', 'Subgenre']);
            if (bookProps.newSubgenre) {
                setSteps(['Genre', 'Subgenre', 'New Subgerne', 'Informations']);
            } else {
                setSteps(['Genre', 'Subgenre', 'Informations']);
            }
        }
    }, [bookProps.activeStep, bookProps.newSubgenre])

    return <BookContext.Provider value={{
        bookProps,
        setBookProps,
        handleBack,
        handleNext,
        handleReset,
        steps
    }}>
        {children}
    </BookContext.Provider>
}