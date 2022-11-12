import styled from 'styled-components';

import { ReactComponent as BookmarkEmpty } from './../assets/icon-bookmark-empty.svg';

import { ReactComponent as BookmarkFull } from './../assets/icon-bookmark-full.svg';
type LikeButtonTypes = { isBookmarked: boolean };

const LikeButton = ({ isBookmarked }: LikeButtonTypes) => {
    return (
        <StyledButton>
            {isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
        </StyledButton>
    );
};

export default LikeButton;

const StyledButton = styled.button`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: hsl(var(--darkBlue) / 0.5);
    mix-blend-mode: normal;
    color: hsl(var(--pureWhite));
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: hsl(var(--pureWhite));
        color: hsl(var(--darkBlue));
    }
`;
