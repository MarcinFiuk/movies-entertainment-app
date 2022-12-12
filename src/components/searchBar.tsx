import styled from 'styled-components';

import { ReactComponent as SearchIcon } from './../assets/icon-search.svg';

const SearchBar = () => {
    return (
        <Wrapper>
            <ButtonStyled>
                <SearchIcon />
            </ButtonStyled>
            <Input type='text' placeholder='Search for movies or TV series' />
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

    &:focus {
        outline: none;
        border-color: hsl(var(--greyishBlue));
    }

    @media (min-width: 48rem) {
        font-size: var(--fs-24);
        line-height: 1.25rem;
    }
`;
