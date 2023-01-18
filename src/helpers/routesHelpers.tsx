export const retrieveStringFromParams = (pathname: string) => {
    let obj = { category: '', title: '' };

    if (pathname === '/movies') {
        obj = { category: 'Movie', title: 'Movies' };
    }
    if (pathname === '/series') {
        obj = { category: 'TV Series', title: 'TV Series' };
    }

    return obj;
};
