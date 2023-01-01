import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import { DataProvider } from './context/dataContext';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Bookmarked from './pages/Bookmarked';
import SearchBar from './components/searchBar';

function App() {
    return (
        <DataProvider>
            <Wrapper>
                <Header />
                <main>
                    <SearchBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/movies' element={<Movies />} />
                        <Route path='/series' element={<TvSeries />} />
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
    grid-template-rows: 56px 1fr;
    gap: 1.5rem;

    @media (min-width: 48rem) {
        grid-template-rows: 72px 1fr;
        gap: 2rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: 96px 1fr;
        grid-template-rows: auto;
        gap: 32px;
    }
`;
