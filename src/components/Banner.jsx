import BannerImg from '../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-[#131313]/5 min-h-[60vh] rounded-2xl p-6 lg:p-12">
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-12">
                        Books to freshen up your bookshelf.
                    </h1>
                    <button className="btn btn-primary bg-[#23BE0A] border-0 p-6">View The List</button>
                </div>

                <div className="w-full max-w-sm">
                    <img
                        src={BannerImg}
                        alt="Books Banner"
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>

    );
};

export default Banner;