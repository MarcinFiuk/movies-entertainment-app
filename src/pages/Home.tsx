import Recommended from '../components/Recommended';
import SearchBar from '../components/searchBar';
import Trendy from '../components/Trendy';

const Home = () => {
    return (
        <>
            <SearchBar />
            <Trendy />
            <Recommended />
        </>
    );
};

export default Home;
