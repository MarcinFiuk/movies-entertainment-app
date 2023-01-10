import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import useMatchMedia from '../hooks/useMatchMedia';
import { useDataProvider, Data } from './../context/dataContext';
import ImagePlayOverlay from './ImagePlayOverlay';

type TrendyProps = {
    movies: Data;
    title: string;
};

type PictureTypes = {
    picture: {
        small: string;
        large: string;
    };
};

const config = {
    nextButtonText: '>',
    prevButtonText: '<',
};

const Trendy = ({ movies, title }: TrendyProps) => {
    const { updateIsBookmarked } = useDataProvider();
    const isLarge = useMatchMedia('(min-width:1024px)');

    const moviesList = movies.map((movie) => {
        if (!movie.thumbnail.trending) {
            return null;
        }

        const { id, category, year, title, rating, isBookmarked, thumbnail } =
            movie;
        const { trending } = thumbnail;

        return (
            <ElementWrapper key={id}>
                <PictureSection picture={trending}>
                    <ImagePlayOverlay />
                </PictureSection>
                <LikeButtonWrapper>
                    <LikeButton
                        isBookmarked={isBookmarked}
                        onClick={() => updateIsBookmarked(id)}
                    />
                </LikeButtonWrapper>
                <MovieDetailsWrapper>
                    <MovieDetails
                        size='big'
                        category={category}
                        year={year}
                        title={title}
                        rating={rating}
                    />
                </MovieDetailsWrapper>
            </ElementWrapper>
        );
    });

    return (
        <GlobalWrapper>
            <h2>{title}</h2>
            <CarouselWrapper>
                <Carousel
                    wrapAround={true}
                    slidesToShow={isLarge ? 2.5 : 1.35}
                    defaultControlsConfig={config}
                    renderBottomCenterControls={() => null}
                >
                    {moviesList}
                </Carousel>
            </CarouselWrapper>
        </GlobalWrapper>
    );
};

export default Trendy;

const GlobalWrapper = styled.section`
    margin-right: calc(var(--body-inline-padding) * -1);
    margin-top: 1.5rem;

    @media (min-width: 48rem) {
        margin-top: 2rem;
    }
`;

const CarouselWrapper = styled.div`
    margin-top: 1rem;

    @media (min-width: 48rem) {
        margin-top: 1.5rem;
    }
`;

const ElementWrapper = styled.div`
    position: relative;
    aspect-ratio: 12/7;
    margin-right: 1rem;

    @media (min-width: 48rem) {
        aspect-ratio: 2/1;
        margin-right: 2.5rem;
    }
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    @media (min-width: 48rem) {
        top: 1rem;
        right: 1.5rem;
    }
`;

const PictureSection = styled.div`
    position: absolute;
    inset: 0;
    background-color: hsl(var(--semiDarkBlue));
    background-image: ${({ picture }: PictureTypes) => `url(${picture.small})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.5em;

    @media (min-width: 48rem) {
        background-image: ${({ picture }: PictureTypes) =>
            `url(${picture.large})`};
    }

    &:hover {
        div {
            scale: 1;
        }
    }
`;

const MovieDetailsWrapper = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
`;
