import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useMemo,
    useEffect,
    useCallback,
} from 'react';

import movies from './../data.json';

type ContextProviderProps = {
    children: ReactNode;
};

export type Data = typeof movies;

type Context = {
    data: Data;
    updateIsBookmarked: (id: number) => void;
    getSearchString: (searchString: string) => void;
};

const DataContext = createContext<Context | undefined>(undefined);

const DataProvider = ({ children }: ContextProviderProps) => {
    const [data, setData] = useState(movies);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        if (searchString !== '') {
            const newData = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchString.toLowerCase())
            );

            setData(newData);
        } else {
            setData(movies);
        }
    }, [searchString]);
    //NOTE:
    /* const newData = data.filter((movie) =>
            movie.title.toLowerCase().includes(searchString.toLowerCase())); */
    //NOTE:

    const updateIsBookmarked = (id: number) => {
        const index = data.findIndex((movie) => movie.id === id);
        const moviesCopy = [...data];
        moviesCopy[index] = {
            ...moviesCopy[index],
            isBookmarked: !moviesCopy[index].isBookmarked,
        };
        setData(moviesCopy);
    };

    const getSearchString = (searchString: string) => {
        setSearchString(searchString);
    };

    const value = { data, updateIsBookmarked, getSearchString };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

const useDataProvider = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useDataProvider must be used within a CountProvider');
    }

    return context;
};

export { useDataProvider, DataProvider };
