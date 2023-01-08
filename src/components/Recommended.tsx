import styled from 'styled-components';

import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import { useDataProvider, Data } from './../context/dataContext';

type RecommendedProps = {
    movies: Data;
    title: string;
};

type PictureTypes = {
    picture: {
        small: string;
        medium: string;
        large: string;
    };
};

const Recommended = ({ movies, title }: RecommendedProps) => {
    const { updateIsBookmarked } = useDataProvider();

    const moviesList = movies.map((movie) => {
        const { id, isBookmarked, thumbnail, category, year, title, rating } =
            movie;

        const { regular } = thumbnail;

        return (
            <IndividualElementWrapper key={id}>
                <LikeButtonWrapper>
                    <LikeButton
                        isBookmarked={isBookmarked}
                        onClick={() => updateIsBookmarked(id)}
                    />
                </LikeButtonWrapper>
                <PictureSection picture={regular} />
                <MovieDetails
                    size='small'
                    category={category}
                    year={year}
                    title={title}
                    rating={rating}
                />
            </IndividualElementWrapper>
        );
    });

    return (
        <GlobalWrapper>
            <h2>{title}</h2>
            <MoviesWrapper>{moviesList}</MoviesWrapper>
        </GlobalWrapper>
    );
};

export default Recommended;

const GlobalWrapper = styled.section`
    margin-top: 1.5rem;

    @media (min-width: 48rem) {
        margin-top: 2.5rem;
    }
`;

const MoviesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;

    @media (min-width: 48rem) {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.5rem;
        column-gap: 1.875rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 2rem;
        column-gap: 2.5rem;
        margin-top: 2rem;
    }
`;

const IndividualElementWrapper = styled.div`
    position: relative;
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    @media (min-width: 48rem) {
        top: 1rem;
        right: 1rem;
    }
`;

const PictureSection = styled.div`
    width: 100%;
    aspect-ratio: 16/11;
    border-radius: 0.5em;
    background-color: hsl(var(--semiDarkBlue));
    background-image: ${({ picture }: PictureTypes) => `url(${picture.small})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0.5rem;

    @media (min-width: 48rem) {
        background-image: ${({ picture }: PictureTypes) =>
            `url(${picture.medium})`};
    }

    @media (min-width: 64rem) {
        background-image: ${({ picture }: PictureTypes) =>
            `url(${picture.large})`};
    }
`;
