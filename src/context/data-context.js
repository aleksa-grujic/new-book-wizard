import React, {createContext,  useState} from 'react';
import Data from '../data.json';

export const DataContext = createContext({});

export default function DataContextProvider({children}) {
    const [data, setData] = useState(Data);

    const addSubgenre = (genreId, subgenre) => {
        data.genres
            .find((genre) => genre.id === genreId).subgenres
            .push(subgenre);
        setData(data);
    };

    const changeSubgenre = (genreId, subgenre) => {
        data.genres
            .find(genre => genre.id === genreId).subgenres
            .map(item => {
                if (item.id === subgenre.id) {
                   Object.assign(item, subgenre)
                }
            });
         setData(data);
    };

    return <DataContext.Provider value={{data, setData, addSubgenre, changeSubgenre}}>
        {children}
    </DataContext.Provider>
}