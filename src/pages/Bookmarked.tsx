import styled from 'styled-components';

import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';

const Bookmarked = () => {
    const { data, search } = useDataProvider();

    const recommendedMovies = data.filter(
        (el) => el.category === 'Movie' && el.isBookmarked
    );
    const recommendedTVSeries = data.filter(
        (el) => el.category === 'TV Series' && el.isBookmarked
    );

    const searchedMovies = recommendedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    const searchedTVSeries = recommendedTVSeries.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    const moviesToDisplay = search ? searchedMovies : recommendedMovies;
    const tvSeriesToDisplay = search ? searchedTVSeries : recommendedTVSeries;

    return (
        <>
            {moviesToDisplay.length ? (
                <Recommended
                    movies={moviesToDisplay}
                    title='Bookmarked Movies'
                />
            ) : null}
            {tvSeriesToDisplay.length ? (
                <Recommended
                    movies={tvSeriesToDisplay}
                    title='Bookmarked TV Series'
                />
            ) : null}

            {!moviesToDisplay.length && !tvSeriesToDisplay.length ? (
                <GlobalWrapper>
                    {search ? (
                        <h2>
                            Sorry, we couldn't find any results for{' '}
                            <strong>{search}</strong>
                        </h2>
                    ) : (
                        <h2>No element was bookmarked</h2>
                    )}
                </GlobalWrapper>
            ) : null}
        </>
    );
};

export default Bookmarked;

const GlobalWrapper = styled.section`
    margin-top: 1.5rem;

    @media (min-width: 48rem) {
        margin-top: 2.5rem;
    }

    h2 {
        font-weight: var(--fontWeight-300);
        font-size: var(--fs-20);
        line-height: 1.25;
        letter-spacing: -0.3px;

        @media (min-width: 48rem) {
            font-size: var(--fs-32);
            letter-spacing: -0.5px;
        }
    }
`;
