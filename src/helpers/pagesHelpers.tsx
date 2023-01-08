export const createHeadingForSearched = (size: number, search: string) => {
    if (size === 0) {
        return `Sorry, we couldn't find any results for ${search}`;
    }
    const oneOrMore = size === 1 ? 'result' : 'results';
    return `Found ${size} ${oneOrMore} for '${search}'`;
};
