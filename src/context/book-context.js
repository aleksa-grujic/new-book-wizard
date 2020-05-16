import React, {createContext, useEffect, useState} from 'react';

export const BookContext = createContext({});

export default function BookContextProvider({children}) {
    const [bookProps, setBookProps] = useState({
        activeStep: 0,
        genre: null,
        subgenre: null,
        newSubgenre: false,
    });
    const [steps, setSteps] = useState(['Genre', 'Subgenre', '...']);

    const handleNext = () => {
        setBookProps({...bookProps, activeStep: bookProps.activeStep + 1});
    };

    const handleBack = () => {
        setBookProps({...bookProps, activeStep: bookProps.activeStep - 1});
    };

    const handleReset = () => {
        setBookProps({...bookProps, activeStep: 0});
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