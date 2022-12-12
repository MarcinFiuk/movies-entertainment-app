import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
--fontWeight-300:300;
--fontWeight-500:500;

--pureWhite:0 0% 100%;
--red:0 97% 63%;
--darkBlue:224  30%  9%;
--semiDarkBlue:223  36%  13%;
--greyishBlue:223  23%  46%;

--fs-32:2rem;
--fs-24:1.5rem;
--fs-20:1.25rem;
--fs-18:1.125rem;
--fs-16:1rem;
--fs-14:0.875rem;
--fs-12:0.75rem;

--body-inline-padding:16px;
}

body{
    max-width:1440px;
    margin-inline: auto;
    font-family: 'Outfit', sans-serif;
    background-color:hsl(var(--darkBlue));
    color: hsl(var(--pureWhite));
    overflow-x:hidden;
    padding:var(--body-inline-padding);

    @media(min-width: 48rem){
        --body-inline-padding:25px

    };

    @media(min-width: 64rem){
        --body-inline-padding:32px
}
}

button{
    background-color:transparent;
    border:none;
}

h2{
    font-weight: var(--fontWeight-300);
    font-size: var(--fs-20);
    line-height:1.25;
    letter-spacing: -0.3px;

    @media (min-width: 48rem) {
        font-size: var(--fs-32);
        letter-spacing: -0.5px;
    }
}
`;

/*
@media(min-width: 48rem)
@media(min-width: 64rem)
@media(min-width: 80rem)

*/
