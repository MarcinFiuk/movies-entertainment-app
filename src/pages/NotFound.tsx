import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Wrapper>
            <h2>Oops!</h2>
            <p>Page Not Found</p>
            <div>
                <Link to='/'>Visit Our Homepage</Link>
            </div>
        </Wrapper>
    );
};

export default NotFound;

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    gap: 1rem;
    margin-top: 2rem;

    p {
        font-weight: var(--fontWeight-500);
        line-height: 19px;
        font-size: var(--fs-16);
        line-height: 19px;

        @media (min-width: 48rem) {
            font-size: var(--fs-24);
            line-height: 30px;
        }
    }

    a {
        color: hsl(var(--pureWhite));
    }
`;
