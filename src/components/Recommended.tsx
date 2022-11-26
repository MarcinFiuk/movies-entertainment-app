import styled from 'styled-components';
import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import { DataType } from '../App.types';
import { url } from 'inspector';

type RecommendedTypes = { movies: DataType };

type PictureTypes = {
    picture: {
        small: string;
        medium: string;
        large: string;
    };
};

const Recommended = ({ movies }: RecommendedTypes) => {
    const moviesList = movies.map((movie) => {
        return (
            <IndividualElementWrapper>
                <LikeButtonWrapper>
                    <LikeButton isBookmarked={movie.isBookmarked} />
                </LikeButtonWrapper>
                <PictureSection picture={movie.thumbnail.regular} />
                <MovieDetails
                    size='small'
                    category={movie.category}
                    year={movie.year}
                    title={movie.title}
                    rating={movie.rating}
                />
            </IndividualElementWrapper>
        );
    });

    return <GlobalWrapper>{moviesList}</GlobalWrapper>;
};

export default Recommended;

const GlobalWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (min-width: 48rem) {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.5rem;
        column-gap: 1.875rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 2rem;
        column-gap: 2.5rem;
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
`;
