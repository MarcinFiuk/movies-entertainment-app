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
    nextButtonClassName: 'next',
    prevButtonClassName: 'prev',
};

const Trendy = ({ movies, title }: TrendyProps) => {
    const { updateIsBookmarked } = useDataProvider();
    const isLarge = useMatchMedia('(min-width:1024px)');
    const isMaxWidth = useMatchMedia('(min-width:1440px)');

    const moviesList = movies.map((movie) => {
        if (!movie.thumbnail.trending) {
            return null;
        }

        const { id, category, year, title, rating, isBookmarked, thumbnail } =
            movie;
        const { trending } = thumbnail;

        return (
            <ElementWrapper key={id}>
                <PictureSection>
                    <picture>
                        <source
                            srcSet={trending.large}
                            media='(min-width: 64rem)'
                        />
                        <img
                            src={trending.small}
                            alt={`"${title}" miniature`}
                        />
                    </picture>
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
        <GlobalWrapper a={isMaxWidth}>
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
    margin-right: ${({ a }: { a: boolean }) =>
        a ? '0' : 'calc(var(--body-inline-padding) * -1)'};
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

    button.next,
    button.prev {
        height: 46px;
        width: 35px;
        font-size: 1rem;
        border-bottom-right-radius: 0.25em;
        border-top-right-radius: 0.25em;

        @media (min-width: 48rem) {
            height: 100px;
            width: 45px;
            font-size: 2rem;
        }
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
    border-radius: 0.5em;
    overflow: hidden;

    picture,
    img {
        width: 100%;
        height: 100%;
    }

    &:hover > div {
        scale: 1;
    }

    &:has(button:focus) > div {
        scale: 1;
    }
`;

const MovieDetailsWrapper = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
`;
