import styled from 'styled-components';
import LikeButton from './LikeButton';
import MovieDetails from './MovieDetails';

const Recommended = () => {
    return (
        <Wrapper>
            <LikeButtonWrapper>
                <LikeButton isBookmarked={false} />
            </LikeButtonWrapper>
            <PictureSection />
            <MovieDetails size='small' category='Movie' />
        </Wrapper>
    );
};

export default Recommended;

const Wrapper = styled.div`
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
    width: 100%;
    aspect-ratio: 16/11;
    border-radius: 0.5em;
    background-color: hsl(var(--semiDarkBlue));
    background-image: url('./assets/thumbnails/112/regular/small.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 0.5rem;
`;
