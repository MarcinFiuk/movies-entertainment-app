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
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
    );
    border-radius: 0.5em;
    scale: 0;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.25rem;
        background-color: hsl(var(--pureWhite) / 0.25);
        padding: 9px;
        padding-right: 1.5rem;
        border-radius: 500px;
        scale: 0;
        transition: scale 0.4s ease-out;
        color: hsl(var(--pureWhite));
        cursor: pointer;

        &:focus {
            scale: 1;
        }
    }

    span {
        font-weight: var(--fontWeight-500);
        font-size: var(--fs-18);
        line-height: 1.3;
    }

    &:hover {
        button {
            scale: 1;
        }
    }
`;
