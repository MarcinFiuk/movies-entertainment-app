import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';

const TvSeries = () => {
    const { data } = useDataProvider();

    const recommended = data.filter(
        (el) => el.category === 'TV Series' && !el.isTrending
    );

    return <Recommended movies={recommended} title='TV Series' />;
};

export default TvSeries;
