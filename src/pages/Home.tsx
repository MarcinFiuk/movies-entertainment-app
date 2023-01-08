import Recommended from '../components/Recommended';
import Trendy from '../components/Trendy';
import { createHeadingForSearched } from '../helpers/pagesHelpers';
import { useDataProvider } from './../context/dataContext';

const Home = () => {
    const { data, search } = useDataProvider();

    const trending = data.filter((item) => item.isTrending);
    const recommended = data.filter((item) => !item.isTrending);

    const searchedPositions = data.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    const returnContent = search ? (
        <Recommended
            movies={searchedPositions}
            title={createHeadingForSearched(searchedPositions.length, search)}
        />
    ) : (
        <>
            <Trendy movies={trending} />
            <Recommended movies={recommended} title='Recommended for you' />
        </>
    );

    return <> {returnContent}</>;
};

export default Home;
