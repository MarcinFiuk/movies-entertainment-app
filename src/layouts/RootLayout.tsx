import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SearchBar from './../components/searchBar';

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
    gap: 1.5rem;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;

    @media (min-width: 48rem) {
        gap: 2rem;
    }

    @media (min-width: 64rem) {
        gap: 32px;
        grid-template-columns: 96px 1fr;
        grid-template-rows: auto;
    }
`;
