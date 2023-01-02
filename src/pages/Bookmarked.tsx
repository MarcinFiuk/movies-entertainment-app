import styled from 'styled-components';

import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';

const Bookmarked = () => {
    const { data } = useDataProvider();

    const recommendedMovies = data.filter(
        (el) => el.category === 'Movie' && el.isBookmarked && !el.isTrending
    );
    const recommendedTVSeries = data.filter(
        (el) => el.category === 'TV Series' && el.isBookmarked && !el.isTrending
    );

    console.log('s', recommendedTVSeries);

    return (
        //TODO: add content where there is nothing to display
        <>
            {recommendedMovies.length ? (
                <Recommended
                    movies={recommendedMovies}
                    title='Bookmarked Movies'
                />
            ) : null}
            {recommendedTVSeries.length ? (
                <Recommended
                    movies={recommendedTVSeries}
                    title='Bookmarked TV Series'
                />
            ) : null}

            {!recommendedMovies.length && !recommendedTVSeries.length ? (
                <GlobalWrapper>
                    <h2>Any element was bookmarked</h2>
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
`;
