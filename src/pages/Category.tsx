import { useLocation } from 'react-router-dom';

import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';
import { retrieveStringFromParams } from './../helpers/routesHelpers';
import { createHeadingForSearched } from './../helpers/pagesHelpers';

const Category = () => {
    const { data, search } = useDataProvider();
    const { pathname } = useLocation();

    const { category, title } = retrieveStringFromParams(pathname);

    const allPositions = data.filter(
        (el) => el.category === category && !el.isTrending
    );

    const searchedPositions = allPositions.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    const moviesToDisplay = search ? searchedPositions : allPositions;
    const titleToDisplay = search
        ? createHeadingForSearched(moviesToDisplay.length, search)
        : title;

    return <Recommended movies={moviesToDisplay} title={titleToDisplay} />;
};
export default Category;
