import styled from 'styled-components';

import { useDataProvider } from '../context/dataContext';
import { ReactComponent as SearchIcon } from './../assets/icon-search.svg';
import { ReactComponent as CloseIcon } from './../assets/icon-close.svg';
import { useDebounce } from '../hooks/useDebounce';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { retrieveStringFromParams } from '../helpers/routesHelpers';

const SearchBar = () => {
    const { getSearchString } = useDataProvider();
    const [value, search, setSearch] = useDebounce('', 500);
    const { pathname } = useLocation();
    const { placeholder } = retrieveStringFromParams(pathname);
    console.log(pathname);

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const resetSearch = () => {
        setSearch('');
    };

    useEffect(() => {
        getSearchString(search);
    }, [search, getSearchString]);
    console.log('run');

    const placeholderText =
        pathname === '/'
            ? 'Search for movies or TV series'
            : `Search for ${placeholder}`;

    return (
        <Wrapper>
            <IconsWrapper>
                <SearchIcon />
            </IconsWrapper>
            <Input
                type='text'
                placeholder={placeholderText}
                name='search'
                value={value}
                onChange={getInputValue}
            />
            {search && (
                <IconsWrapper
                    as='button'
                    onClick={resetSearch}
                    style={{ cursor: 'pointer' }}
                >
                    <CloseIcon />
                </IconsWrapper>
            )}
        </Wrapper>
    );
};

export default SearchBar;

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;

    @media (min-width: 48rem) {
        gap: 1.5rem;
    }

    @media (min-width: 64rem) {
        margin-top: 64px;
    }
`;

const IconsWrapper = styled.span`
    width: 25px;
    height: 25px;
    padding: 0;

    @media (min-width: 48rem) {
        width: 32px;
        height: 32px;
    }
`;

const Input = styled.input`
    width: 100%;
    font-size: var(--fs-16);
    line-height: 1.25rem;
    background-color: transparent;
    color: hsl(var(--pureWhite));
    border: none;
    border-bottom: 1px solid transparent;

    &:focus,
    &:hover {
        outline: none;
        border-color: hsl(var(--greyishBlue));
        caret-color: hsl(var(--red));
    }

    @media (min-width: 48rem) {
        font-size: var(--fs-24);
        line-height: 1.25rem;
    }
`;
