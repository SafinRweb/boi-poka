import { Link } from "react-router";

const Book = ({ book }) => {

    const { image, bookName, author, tags, category, bookId } = book;

    return (
        <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
            <Link to={`/books/${bookId}`}>
                <figure className="bg-[#131313]/5 py-8">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
            </Link>
            <div className="card-body">
                <div className="flex gap-3">
                    {
                        tags.map((tag, index) => <button
                        key={index}    
                        className="btn btn-xs  bg-[#131313]/5 text-[#23BE0A] border-0">{tag}</button>)
                    }
                </div>
                <h2 className="card-title font-bold text-xl">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 my-2 border-dashed border-[#131313]/5"></div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#23BE0A]" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#23BE0A]" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#23BE0A]" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#23BE0A]" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#23BE0A]" aria-label="5 star" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Book;