import styled from 'styled-components';

import IconLink from './IconLink';

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
                <IconWrapper>
                    <IconLink Icon={Logo} to='/' title='go to homepage' />
                </IconWrapper>
                <VisuallyHidden>Movies App</VisuallyHidden>
                <nav>
                    <ul>
                        <li>
                            <IconLink
                                Icon={Home}
                                to='/'
                                title='go to homepage'
                                type='navLink'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={Movies}
                                to='/movies'
                                title='go to movies page'
                                type='navLink'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={TvSeries}
                                to='/series'
                                title='go to TV series page'
                                type='navLink'
                            />
                        </li>
                        <li>
                            <IconLink
                                Icon={Bookmark}
                                to='/bookmarked'
                                title='go to bookmarked page'
                                type='navLink'
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(var(--semiDarkBlue));
    margin-inline: calc(-1 * var(--body-inline-padding));
    padding-block: 1rem;
    padding-inline: 16px;

    nav > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        list-style: none;
        padding-left: 0;
    }

    ul > li {
        width: 16px;
        height: 16px;
    }

    img {
        width: 24px;
        height: 24px;
        border: 1px solid hsl(var(--pureWhite));
        border-radius: 100%;
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
        margin-inline: 0;
        margin-top: 1.5rem;
        padding-block: 1.25rem;
        padding-inline: 24px;
        border-radius: 10px;

        h1 {
            width: 32px;
            height: 25px;
        }

        ul > li {
            width: 20px;
            height: 20px;
        }

        img {
            width: 32px;
            height: 32px;
        }
    }

    @media (min-width: 64rem) {
        flex-direction: column;
        height: calc(100vh - 2rem);
        max-height: 960px;
        min-height: 400px;
        justify-content: center;
        align-items: center;
        padding-block: 2rem;
        border-radius: 20px;
        margin-top: 2rem;

        nav > ul {
            flex-wrap: wrap;
            gap: 40px;
            margin-top: 72px;
        }

        img {
            width: 40px;
            height: 40px;
            margin-top: auto;
        }
    }
`;

const IconWrapper = styled.div`
    width: 25px;
    height: 20px;

    @media (min-width: 48rem) {
        width: 32px;
        height: 25px;
    }
`;

const VisuallyHidden = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`;
