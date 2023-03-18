import styled from 'styled-components';

import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import { useDataProvider, Data } from './../context/dataContext';
import ImagePlayOverlay from './ImagePlayOverlay';

type RecommendedProps = {
    movies: Data;
    title: string | React.ReactElement;
};

const Recommended = ({ movies, title }: RecommendedProps) => {
    const { updateIsBookmarked } = useDataProvider();

    const moviesList = movies.map((movie) => {
        const { id, isBookmarked, thumbnail, category, year, title, rating } =
            movie;

        const { regular } = thumbnail;

        return (
            <li key={id}>
                <ElementWrapper key={id}>
                    <PictureSection>
                        <picture>
                            <source
                                srcSet={regular.large}
                                media='(min-width: 64rem)'
                            />
                            <source
                                srcSet={regular.medium}
                                media='(min-width: 48rem)'
                            />
                            <img
                                src={regular.small}
                                alt={`"${title}" miniature`}
                                loading='lazy'
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
                    <MovieDetails
                        size='small'
                        category={category}
                        year={year}
                        title={title}
                        rating={rating}
                    />
                </ElementWrapper>
            </li>
        );
    });

    return (
        <GlobalWrapper>
            <h2>{title}</h2>
            <MoviesWrapper>
                <Ul>{moviesList}</Ul>
            </MoviesWrapper>
        </GlobalWrapper>
    );
};

export default Recommended;

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

const MoviesWrapper = styled.div`
    margin-top: 1.5rem;

    @media (min-width: 64rem) {
        margin-top: 2rem;
    }
`;

const Ul = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding-left: 0;

    @media (min-width: 48rem) {
        column-gap: 1.875rem;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1.5rem;
    }

    @media (min-width: 64rem) {
        column-gap: 2.5rem;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 2rem;
        row-gap: 2rem;
    }
`;

const ElementWrapper = styled.div`
    position: relative;
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    @media (min-width: 48rem) {
        right: 1rem;
        top: 1rem;
    }
`;

const PictureSection = styled.div`
    aspect-ratio: 16/11;
    background-color: hsl(var(--semiDarkBlue));
    border-radius: 0.5em;
    margin-bottom: 0.5rem;
    overflow: hidden;
    position: relative;

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
