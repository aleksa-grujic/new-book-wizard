import React, {createContext,  useState} from 'react';
import Data from '../data.json';

export const DataContext = createContext({});

export default function DataContextProvider({children}) {
    const [data, setData] = useState(Data);

    const addSubgenre = (genreId, subgenreName, isDescriptionRequired) => {
        let subgenre = {
            id: data.genres[data.genres.length - 1].subgenres[data.genres[data.genres.length - 1].subgenres.length - 1].id + 1,
            name: subgenreName,
            isDescriptionRequired: isDescriptionRequired
        };

        data.genres
            .find((genre) => genre.id === genreId).subgenres
            .push(subgenre);

        setData(data);
    };

    return <DataContext.Provider value={{data, setData, addSubgenre}}>
        {children}
    </DataContext.Provider>
}