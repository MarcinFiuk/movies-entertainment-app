import Recommended from '../components/Recommended';
import SearchBar from '../components/searchBar';
import Trendy from '../components/Trendy';
import { useDataProvider } from './../context/dataContext';

const Home = () => {
    const { data } = useDataProvider();

    const trendingMovies = data.filter((movie) => movie.isTrending);
    const recommendedMovies = data.filter((movie) => !movie.isTrending);

    return (
        <>
            <SearchBar />
            <Trendy movies={trendingMovies} />
            <Recommended movies={recommendedMovies} />
        </>
    );
};

export default Home;
