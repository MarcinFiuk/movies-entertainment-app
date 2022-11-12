import Recommended from '../components/Recommended';
import SearchBar from '../components/searchBar';
import Trendy from '../components/Trendy';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Trendy />
            <Recommended />
        </div>
    );
};

export default Home;
