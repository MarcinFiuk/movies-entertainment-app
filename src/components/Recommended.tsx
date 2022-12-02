import styled from 'styled-components';
import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import { DataType } from '../App.types';

type RecommendedTypesProps = { movies: DataType };

type PictureTypes = {
    picture: {
        small: string;
        medium: string;
        large: string;
    };
};

const Recommended = ({ movies }: RecommendedTypesProps) => {
    console.log(window.innerWidth);
    const moviesList = movies.map((movie) => {
        const { id, isBookmarked, thumbnail, category, year, title, rating } =
            movie;
        const { regular } = thumbnail;
        return (
            <IndividualElementWrapper key={id}>
                <LikeButtonWrapper>
                    <LikeButton isBookmarked={isBookmarked} />
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

    return <GlobalWrapper>{moviesList}</GlobalWrapper>;
};

export default Recommended;

const GlobalWrapper = styled.div`
    width: calc(100vw - (2 * var(--body-inline-padding)));
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
        width: 86vw;
        max-width: 1240px;
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
