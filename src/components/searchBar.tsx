import styled from 'styled-components';

import { useDataProvider } from './../context/dataContext';
import { ReactComponent as SearchIcon } from './../assets/icon-search.svg';
import { useDebounce } from '../hooks/useDebounce';
import { useEffect } from 'react';

const SearchBar = () => {
    const { getSearchString } = useDataProvider();
    const [search, setSearch] = useDebounce('', 500);

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        getSearchString(search);
    }, [search, getSearchString]);

    return (
        <Wrapper>
            <ButtonStyled>
                <SearchIcon />
            </ButtonStyled>
            <Input
                type='text'
                placeholder='Search for movies or TV series'
                name='search'
                onChange={getInputValue}
            />
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

const ButtonStyled = styled.button`
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
