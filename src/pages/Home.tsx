import Recommended from '../components/Recommended';
import Trendy from '../components/Trendy';
import { useDataProvider } from './../context/dataContext';

const Home = () => {
    const { data } = useDataProvider();

    const trendingMovies = data.filter((movie) => movie.isTrending);
    const recommendedMovies = data.filter((movie) => !movie.isTrending);

    return (
        <>
            <Trendy movies={trendingMovies} />
            <Recommended movies={recommendedMovies} />
        </>
    );
};

export default Home;
