import styled from 'styled-components';

import { ReactComponent as MovieIcon } from './../assets/icon-category-movie.svg';
import { ReactComponent as TVIcon } from './../assets/icon-category-tv.svg';

type MovieDetailsProps = { size: string; category: 'Movie' | 'TV Series' };

const MovieDetails = ({ size, category }: MovieDetailsProps) => {
    return (
        <div>
            <DetailsWrapper>
                <Detail>2019</Detail>
                <Dot />
                <Detail>
                    {category === 'Movie' ? <MovieIcon /> : <TVIcon />}
                </Detail>
                <Detail>Movie</Detail>
                <Dot />
                <Detail>PG</Detail>
            </DetailsWrapper>
            <div>
                <Title>Bottom Gear</Title>
            </div>
        </div>
    );
};

export default MovieDetails;

const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Detail = styled.p`
    font-size: var(--font-xs);
    font-weight: var(--fontWeight-300);
    line-height: 15px;
    color: hsl(var(--pureWhite) / 0.75);

    @media (min-width: 48rem) {
        font-size: var(--font-base);
        line-height: 19px;
    }
`;

const Title = styled.p`
    font-size: var(--font-base);
    font-weight: var(--fontWeight-500);
    line-height: 19px;

    @media (min-width: 48rem) {
        font-size: var(--font-xl);
        line-height: 30px;
    }
`;

const Dot = styled.span`
    display: block;
    width: 3px;
    height: 3px;
    background-color: hsl(var(--pureWhite) / 0.5);
    border-radius: 100%;
`;
