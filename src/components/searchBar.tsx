import styled from 'styled-components';

const SearchBar = () => {
    return (
        <Wrapper>
            <button>
                <Image src='/assets/icon-search.svg' />
            </button>
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

const Image = styled.img`
    width: 25px;
    height: 25px;

    @media (min-width: 48rem) {
        width: 32px;
        height: 32px;
    }
`;

const Input = styled.input`
    width: 100%;
    font-size: var(--font-base);
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
        font-size: var(--font-xl);
        line-height: 1.25rem;
    }
`;
