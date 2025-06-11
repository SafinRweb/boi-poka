import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Books from '../components/Books';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <Banner />
            <Books />
        </div>
    );
};

export default Home;