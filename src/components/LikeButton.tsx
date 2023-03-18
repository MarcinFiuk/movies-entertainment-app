import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import { ReactComponent as BookmarkEmpty } from './../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkFull } from './../assets/icon-bookmark-full.svg';

type LikeButtonProps = ComponentPropsWithoutRef<'button'> & {
    isBookmarked: boolean;
};

const LikeButton = ({ isBookmarked, onClick }: LikeButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            aria-pressed={isBookmarked}
            aria-label='Like'
        >
            {isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
        </StyledButton>
    );
};

export default LikeButton;

const StyledButton = styled.button`
    background-color: hsl(var(--darkBlue) / 0.5);
    border-radius: 100%;
    color: hsl(var(--pureWhite));
    cursor: pointer;
    display: grid;
    height: 32px;
    mix-blend-mode: normal;
    place-items: center;
    transition: 0.2s ease-in-out;
    width: 32px;

    &:hover {
        background-color: hsl(var(--pureWhite));
        color: hsl(var(--darkBlue));
    }
`;
