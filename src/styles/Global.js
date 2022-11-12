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

--font-2xl:2rem;
--font-xl:1.5rem;
--font-large:1.125rem;
--font-base:1rem;
--font-small:0.8125rem;
--font-xs:0.75rem;

--padding-inline-phone:16px;
--padding-inline-tablet:25px;
--padding-inline-desktop:32px;
}

body{
    max-width:1440px;
    margin-inline: auto;
    font-family: 'Outfit', sans-serif;
    background-color:hsl(var(--darkBlue));
    color: hsl(var(--pureWhite));
    overflow-x:hidden;
    padding:var(--padding-inline-phone);

    @media(min-width: 48rem){
        padding-inline:var(--padding-inline-tablet);
    };

    @media(min-width: 64rem){
    padding-inline:var(--padding-inline-desktop);
}
}

button{
    background-color:transparent;
    border:none;
}
`;

/*
@media(min-width: 48rem)
@media(min-width: 64rem)
@media(min-width: 80rem)

*/
