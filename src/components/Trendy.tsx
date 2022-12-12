import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import useMatchMedia from '../hooks/useMatchMedia';
import { useDataProvider, Data } from './../context/dataContext';

type TrendyProps = {
    movies: Data;
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

const Trendy = ({ movies }: TrendyProps) => {
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
            <ElementWrapper key={id} picture={trending!}>
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
            <h2>Trending</h2>
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
    border-radius: 0.5em;
    background-color: hsl(var(--semiDarkBlue));
    background-image: ${({ picture }: PictureTypes) => `url(${picture.small})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 1rem;

    @media (min-width: 48rem) {
        aspect-ratio: 2/1;
        background-image: ${({ picture }: PictureTypes) =>
            `url(${picture.large})`};
        margin-right: 2.5rem;
    }
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

const MovieDetailsWrapper = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
`;
