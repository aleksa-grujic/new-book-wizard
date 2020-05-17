import React from 'react';
import BookContextProvider from "../context/book-context";
import DataContextProvider from "../context/data-context";
import StepContainer from "./step-container";



export default function WizardContainer() {
    return (
        <DataContextProvider>
            <BookContextProvider>
               <StepContainer />
            </BookContextProvider>
        </DataContextProvider>
    );
}