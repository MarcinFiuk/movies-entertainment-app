import styled from 'styled-components';

import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';
import { useDataProvider, Data } from './../context/dataContext';
import ImagePlayOverlay from './ImagePlayOverlay';

type RecommendedProps = {
    movies: Data;
    title: string | React.ReactElement;
};

// type PictureTypes = {
//     picture: {
//         small: string;
//         medium: string;
//         large: string;
//     };
// };

const Recommended = ({ movies, title }: RecommendedProps) => {
    const { updateIsBookmarked } = useDataProvider();

    const moviesList = movies.map((movie) => {
        const { id, isBookmarked, thumbnail, category, year, title, rating } =
            movie;

        const { regular } = thumbnail;
        /**
 li
    div
        div>likeButton
        div>a>img
        div>description
 */
        return (
            <li>
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
`;

const MoviesWrapper = styled.div`
    margin-top: 1.5rem;

    @media (min-width: 64rem) {
        margin-top: 2rem;
    }
`;

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-left: 0;
    list-style: none;

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

const ElementWrapper = styled.div`
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
    position: relative;
    aspect-ratio: 16/11;
    border-radius: 0.5em;
    background-color: hsl(var(--semiDarkBlue));
    margin-bottom: 0.5rem;
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
