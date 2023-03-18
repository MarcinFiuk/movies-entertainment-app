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

const CarouselWrapper = styled.div`
    margin-top: 1rem;

    @media (min-width: 48rem) {
        margin-top: 1.5rem;
    }

    button.next,
    button.prev {
        border-bottom-right-radius: 0.25em;
        border-top-right-radius: 0.25em;
        font-size: 1rem;
        height: 46px;
        width: 35px;

        @media (min-width: 48rem) {
            font-size: 2rem;
            height: 100px;
            width: 45px;
        }
    }
`;

const ElementWrapper = styled.div`
    aspect-ratio: 12/7;
    margin-right: 1rem;
    position: relative;

    @media (min-width: 48rem) {
        aspect-ratio: 2/1;
        margin-right: 2.5rem;
    }
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    @media (min-width: 48rem) {
        right: 1.5rem;
        top: 1rem;
    }
`;

const PictureSection = styled.div`
    background-color: hsl(var(--semiDarkBlue));
    border-radius: 0.5em;
    inset: 0;
    overflow: hidden;
    position: absolute;

    picture,
    img {
        height: 100%;
        width: 100%;
    }

    &:hover > div {
        scale: 1;
    }

    &:has(button:focus) > div {
        scale: 1;
    }
`;

const MovieDetailsWrapper = styled.div`
    bottom: 1rem;
    left: 1rem;
    position: absolute;
`;
