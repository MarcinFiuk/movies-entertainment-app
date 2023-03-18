import styled from 'styled-components';

import IconLink from './IconLink';
import VisuallyHidden from './VisuallyHidden';

import { ReactComponent as Logo } from './../assets/logo.svg';
import { ReactComponent as Home } from './../assets/icon-nav-home.svg';
import { ReactComponent as Movies } from './../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from './../assets/icon-nav-tv-series.svg';
import { ReactComponent as Bookmark } from './../assets/icon-nav-bookmark.svg';
import avatar from './../assets/image-avatar.png';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <VisuallyHidden element='h1'>Movies App</VisuallyHidden>
                <IconWrapper>
                    <Logo />
                </IconWrapper>
                <nav>
                    <ul>
                        <li>
                            <IconLink
                                Icon={Home}
                                to='/'
                                title='go to homepage'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={Movies}
                                to='/movies'
                                title='go to movies page'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={TvSeries}
                                to='/series'
                                title='go to TV series page'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={Bookmark}
                                to='/bookmarked'
                                title='go to bookmarked page'
                            />
                        </li>
                    </ul>
                </nav>
                <img src={avatar} alt='avatar' />
            </Wrapper>
        </header>
    );
};

export default Header;

const Wrapper = styled.div`
    align-items: center;
    background-color: hsl(var(--semiDarkBlue));
    display: flex;
    justify-content: space-between;
    margin-inline: calc(-1 * var(--body-inline-padding));
    padding-block: 1rem;
    padding-inline: 16px;

    nav > ul {
        align-items: center;
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        list-style: none;
        padding-left: 0;
    }

    ul > li {
        height: 16px;
        width: 16px;
    }

    img {
        border-radius: 100%;
        border: 1px solid hsl(var(--pureWhite));
        height: 24px;
        width: 24px;
    }

    a {
        color: hsl(var(--greyishBlue));
        transition: color 0.2s ease-in-out;

        &:hover {
            color: hsl(var(--red));
        }

        &.active {
            color: hsl(var(--pureWhite));
        }
    }

    @media (min-width: 48rem) {
        border-radius: 10px;
        margin-inline: 0;
        margin-top: 1.5rem;
        padding-block: 1.25rem;
        padding-inline: 24px;

        h1 {
            height: 25px;
            width: 32px;
        }

        ul > li {
            height: 20px;
            width: 20px;
        }

        img {
            height: 32px;
            width: 32px;
        }
    }

    @media (min-width: 64rem) {
        align-items: center;
        border-radius: 20px;
        flex-direction: column;
        height: calc(100vh - 2rem);
        justify-content: center;
        margin-top: 2rem;
        max-height: 960px;
        min-height: 400px;
        padding-block: 2rem;

        nav > ul {
            flex-wrap: wrap;
            gap: 40px;
            margin-top: 72px;
        }

        img {
            height: 40px;
            margin-top: auto;
            width: 40px;
        }
    }
`;

const IconWrapper = styled.div`
    height: 20px;
    width: 25px;

    @media (min-width: 48rem) {
        height: 25px;
        width: 32px;
    }
`;
