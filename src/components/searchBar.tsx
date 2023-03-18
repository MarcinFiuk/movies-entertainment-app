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
    height: 25px;
    padding: 0;
    width: 25px;

    @media (min-width: 48rem) {
        height: 32px;
        width: 32px;
    }
`;

const Input = styled.input`
    background-color: transparent;
    border-bottom: 1px solid transparent;
    border: none;
    color: hsl(var(--pureWhite));
    font-size: var(--fs-16);
    line-height: 1.25rem;
    width: 100%;

    &:focus,
    &:hover {
        border-color: hsl(var(--greyishBlue));
        caret-color: hsl(var(--red));
        outline: none;
    }

    @media (min-width: 48rem) {
        font-size: var(--fs-24);
        line-height: 1.25rem;
    }
`;
