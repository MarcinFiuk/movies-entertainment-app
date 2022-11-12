import styled from 'styled-components';

import LikeButton from './LikeButton';

const Trendy = () => {
    return (
        <Wrapper>
            <LikeButtonWrapper>
                <LikeButton isBookmarked={false} />
            </LikeButtonWrapper>
            a
        </Wrapper>
    );
};

export default Trendy;

const Wrapper = styled.div`
    position: relative;
    width: 240px;
    aspect-ratio: 12/7;
    border-radius: 0.5em;
    background-color: hsl(var(--semiDarkBlue));
    background-image: url('./assets/thumbnails/112/regular/small.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 48rem) {
        width: 470px;
        aspect-ratio: 2/1;
    }
`;

const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;
