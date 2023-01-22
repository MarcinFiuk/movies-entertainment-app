import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useMemo,
    useCallback,
} from 'react';

import movies from './../data.json';

type ContextProviderProps = {
    children: ReactNode;
};

export type Data = typeof movies;

type Context = {
    data: Data;
    search: string;
    updateIsBookmarked: (id: number) => void;
    getSearchString: (searchString: string) => void;
};

const DataContext = createContext<Context | undefined>(undefined);

const DataProvider = ({ children }: ContextProviderProps) => {
    const [data, setData] = useState(movies);
    const [searchString, setSearchString] = useState('');

    console.log('log from context');

    const updateIsBookmarked = useCallback(
        (id: number) => {
            const index = data.findIndex((movie) => movie.id === id);
            const moviesCopy = [...data];
            moviesCopy[index] = {
                ...moviesCopy[index],
                isBookmarked: !moviesCopy[index].isBookmarked,
            };
            setData(moviesCopy);
        },
        [data]
    );

    const getSearchString = useCallback((searchString: string) => {
        setSearchString(searchString);
    }, []);

    const memoizedValue = useMemo(() => {
        return {
            data,
            updateIsBookmarked,
            getSearchString,
            search: searchString,
        };
    }, [data, updateIsBookmarked, getSearchString, searchString]);

    return (
        <DataContext.Provider value={memoizedValue}>
            {children}
        </DataContext.Provider>
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
