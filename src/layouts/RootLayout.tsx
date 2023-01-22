import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const RootLayout = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <SearchBar />
                <Outlet />
            </main>
        </Wrapper>
    );
};

export default RootLayout;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    gap: 1.5rem;

    @media (min-width: 48rem) {
        grid-template-rows: auto 1fr;
        gap: 2rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: 96px 1fr;
        grid-template-rows: auto;
        gap: 32px;
    }
`;
