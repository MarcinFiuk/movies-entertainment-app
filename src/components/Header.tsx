import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <Wrapper>Header</Wrapper>
        </header>
    );
};

export default Header;

const Wrapper = styled.div`
    height: 100%;
    background-color: var(--pureWhite);
`;
