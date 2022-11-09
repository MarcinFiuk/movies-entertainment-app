import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
--fontWeight-300:300;
--fontWeight-500:500;

--pureWhite:hsl(0,0%,100%);
--red:hsl(0,97%,63%);
--darkBlue:hsl(224, 30%, 9%);
--semiDarkBlue:hsla(223, 36%, 13%);
--greyishBlue:hsla(223, 23%, 46%);


--font-xl:2rem;
--font-large:1.5rem;
--font-medium:1.125rem;
--font-small:0.9375rem;
--font-xs:0.8125rem;

}

body{
    max-width:1440px;
    margin-inline: auto;
    font-family: 'Outfit', sans-serif;
    overflow-x:hidden;
}
`;

/*
@media(min-width: 48rem)
@media(min-width: 64rem)
@media(min-width: 80rem)

*/
