import BannerImg from '../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold max-w-[526px]">Books to freshen up your bookshelf.</h1>
                    <p className="py-6">
                        Books to freshen up your bookshelf.
                    </p>
                    <button className="btn btn-primary">View The List</button>
                </div>
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Banner;