import Recommended from '../components/Recommended';
import { useDataProvider } from './../context/dataContext';

const Bookmarked = () => {
    const { data } = useDataProvider();

    const recommended = data.filter((el) => el.isBookmarked && !el.isTrending);

    return <Recommended movies={recommended} title='Bookmarked Movies' />;
};

export default Bookmarked;
