import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';

const Movies = () => {
    const { data } = useDataProvider();

    const recommended = data.filter(
        (el) => el.category === 'Movie' && !el.isTrending
    );

    return <Recommended movies={recommended} title='Movie' />;
};

export default Movies;
