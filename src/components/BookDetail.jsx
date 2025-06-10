import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList } from '../Utility/addToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const { bookId: CBookId, image, author, bookName, review, tags, rating, publisher, yearOfPublishing, totalPages } = book;
    const handelMarkAsRead=(id)=>{
        addToStoredReadList (id);
    }
    return (
        <div className="bg-base-100 shadow-xl lg:my-12 flex flex-col lg:flex-row rounded-lg overflow-hidden max-w-6xl mx-auto">
            <figure className="bg-[#131313]/5 py-8 w-full lg:w-1/2 flex-none flex items-center justify-center p-4 lg:p-8">
                <img
                    src={image}
                    className="max-h-[300px] lg:max-h-[400px] w-auto object-contain"
                    alt={bookName} />
            </figure>
            <div className="card-body  w-full lg:w-1/2 flex-1 p-6 lg:p-8">
                <h2 className="card-title font-bold text-3xl">{bookName}</h2>
                <p><span className='font-semibold'>By: </span> {author}</p>
                <div className='border-1 border-dashed'></div>
                <p className='text-xl font-semibold'>Fiction</p>
                <div className='border-1 border-dashed'></div>
                <p>{review}</p>
                <div className="flex flex-wrap items-center gap-2 my-3">
                    <p><span className='font-semibold' >Tags: </span>
                        {
                            tags.map((tag, index) => <button
                                key={index}
                                className="btn btn-xs bg-[#131313]/5 text-[#23BE0A] border-0 mx-1">{tag}</button>)
                        }
                    </p>
                </div>
                <div className='border-1 border-dashed'></div>
                <div className="bg-white py-6 md:py-8 rounded-lg max-w-md w-full">
                    <div className="flex justify-between items-baseline py-2">
                        <span className="font-normal">Number of Pages:</span>
                        <span className="font-semibold">
                        {totalPages}</span>
                    </div>

                    <div className="flex justify-between items-baseline py-2">
                        <span className="font-normal">Publisher:</span>
                        <span className="font-semibold">
                            {publisher}
                        </span>
                    </div>

                    <div className="flex justify-between items-baseline py-2">
                        <span className="font-normal">Year of Publishing:</span>
                        <span className="font-semibold">{yearOfPublishing}</span>
                    </div>

                    <div className="flex justify-between items-baseline py-2">
                        <span className="font-normal">Rating:</span>
                        <span className="font-semibold">
                        {rating}</span>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handelMarkAsRead(bookId)} className="btn btn-primary bg-[#23BE0A] text-white p-5 border-0">Mark as Read</button>
                    <button className="btn btn-primary bg-[#23BE0A] text-white p-5 border-0">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;