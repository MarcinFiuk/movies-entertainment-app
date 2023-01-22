export const retrieveStringFromParams = (pathname: string) => {
    let obj = { category: '', title: '', placeholder: '' };

    if (pathname === '/movies') {
        obj = { category: 'Movie', title: 'Movies', placeholder: 'movies' };
    }
    if (pathname === '/series') {
        obj = {
            category: 'TV Series',
            title: 'TV Series',
            placeholder: 'TV series',
        };
    }
    if (pathname === '/bookmarked') {
        obj = {
            category: 'Bookmarked',
            title: 'Bookmarked',
            placeholder: 'bookmarked',
        };
    }
    return obj;
};
