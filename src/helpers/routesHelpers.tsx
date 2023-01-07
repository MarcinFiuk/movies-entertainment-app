export const retrieveStringFromParams = (pathname: string) => {
    let string: string = '';

    if (pathname === '/movies') {
        string = 'Movie';
    }
    if (pathname === '/series') {
        string = 'TV Series';
    }

    return string;
};
