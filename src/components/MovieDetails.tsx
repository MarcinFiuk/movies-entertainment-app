import styled, { css } from 'styled-components';

import { ReactComponent as MovieIcon } from './../assets/icon-category-movie.svg';
import { ReactComponent as TVIcon } from './../assets/icon-category-tv.svg';

type MovieDetailsProps = {
    size: 'big' | 'small';
    category: string;
    year: number;
    title: string;
    rating: string;
};
type SizeProps = Pick<MovieDetailsProps, 'size'>;

const MovieDetails = ({
    size,
    category,
    year,
    title,
    rating,
}: MovieDetailsProps) => {
    return (
        <div>
            <DetailsWrapper size={size}>
                <p>{year}</p>
                <Dot />
                {category === 'Movie' ? <MovieIcon /> : <TVIcon />}
                <p>{category}</p>
                <Dot />
                <p>{rating}</p>
            </DetailsWrapper>
            <div>
                <Title size={size}>{title}</Title>
            </div>
        </div>
    );
};

export default MovieDetails;

const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    p {
        font-size: var(--fs-12);
        font-weight: var(--fontWeight-300);
        color: hsl(var(--pureWhite) / 0.75);
    }

    ${({ size }: SizeProps) =>
        size === 'big' &&
        css`
            p {
                line-height: 15px;

                @media (min-width: 48rem) {
                    font-size: var(--fs-16);
                    line-height: 19px;
                }
            }
        `};
    ${({ size }: SizeProps) =>
        size === 'small' &&
        css`
            p {
                line-height: 14px;

                @media (min-width: 48rem) {
                    font-size: var(--fs-14);
                    line-height: 16px;
                }
            }
        `};
`;

const Dot = styled.span`
    display: block;
    width: 3px;
    height: 3px;
    background-color: hsl(var(--pureWhite) / 0.5);
    border-radius: 100%;
`;

const Title = styled.p`
    font-weight: var(--fontWeight-500);

    ${({ size }: SizeProps) =>
        size === 'big' &&
        css`
            font-size: var(--fs-16);
            line-height: 19px;

            @media (min-width: 48rem) {
                font-size: var(--fs-24);
                line-height: 30px;
            }
        `}
    ${({ size }: SizeProps) =>
        size === 'small' &&
        css`
            font-size: var(--fs-14);
            line-height: 17px;

            @media (min-width: 48rem) {
                font-size: var(--fs-18);
                line-height: 22px;
            }
        `}
`;
