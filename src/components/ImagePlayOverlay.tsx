import styled from 'styled-components';

import play from './../assets/icon-play.svg';
const ImagePlayOverlay = () => {
    return (
        <Wrapper>
            <button>
                <img src={play} alt='play icon' />
                <span>Play</span>
            </button>
        </Wrapper>
    );
};

export default ImagePlayOverlay;

const Wrapper = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
    );
    border-radius: 0.5em;
    display: grid;
    height: 100%;
    inset: 0;
    place-items: center;
    position: absolute;
    scale: 0;
    width: 100%;

    button {
        align-items: center;
        background-color: hsl(var(--pureWhite) / 0.25);
        border-radius: 500px;
        color: hsl(var(--pureWhite));
        cursor: pointer;
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        padding-right: 1.5rem;
        padding: 9px;
        scale: 0;
        transition: scale 0.4s ease-out;

        &:focus {
            scale: 1;
        }
    }

    span {
        font-size: var(--fs-18);
        font-weight: var(--fontWeight-500);
        line-height: 1.3;
    }

    &:hover {
        button {
            scale: 1;
        }
    }

    @media (not(hover)) {
        display: none;
    }
`;
