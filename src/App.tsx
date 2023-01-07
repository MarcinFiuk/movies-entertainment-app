import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import { DataProvider } from './context/dataContext';
import Bookmarked from './pages/Bookmarked';
import SearchBar from './components/searchBar';
import Category from './pages/Category';

function App() {
    return (
        <DataProvider>
            <Wrapper>
                <Header />
                <main>
                    <SearchBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/movies' element={<Category />} />
                        <Route path='/series' element={<Category />} />
                        <Route path='/bookmarked' element={<Bookmarked />} />
                    </Routes>
                </main>
            </Wrapper>
        </DataProvider>
    );
}

export default App;

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
