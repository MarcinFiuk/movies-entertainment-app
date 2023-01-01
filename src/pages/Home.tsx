import Recommended from '../components/Recommended';
import Trendy from '../components/Trendy';
import { useDataProvider } from './../context/dataContext';

const Home = () => {
    const { data } = useDataProvider();

    const trending = data.filter((item) => item.isTrending);
    const recommended = data.filter((item) => !item.isTrending);

    return (
        <>
            <Trendy movies={trending} />
            <Recommended movies={recommended} title='Recommended for you' />
        </>
    );
};

export default Home;
