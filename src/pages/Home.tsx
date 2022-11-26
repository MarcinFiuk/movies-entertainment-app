import Recommended from '../components/Recommended';
import SearchBar from '../components/searchBar';
import Trendy from '../components/Trendy';
import { DataType } from '../App.types';

type HomeProps = { data: DataType };

const Home = ({ data }: HomeProps) => {
    const trendyMovies = data.filter((movie) => movie.isTrending === true);
    const recommendedMovies = data.filter(
        (movie) => movie.isTrending === false
    );

    return (
        <div>
            <SearchBar />
            {/* <Trendy movies={trendyMovies} /> */}
            <Recommended movies={recommendedMovies} />
        </div>
    );
};

export default Home;
