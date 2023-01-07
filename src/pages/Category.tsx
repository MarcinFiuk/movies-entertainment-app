import { useLocation } from 'react-router-dom';

import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';
import { retrieveStringFromParams } from './../helpers/routesHelpers';

const Category = () => {
    const { data } = useDataProvider();
    const { pathname } = useLocation();

    const category = retrieveStringFromParams(pathname);

    const recommended = data.filter(
        (el) => el.category === category && !el.isTrending
    );

    return <Recommended movies={recommended} title={category} />;
};
export default Category;
