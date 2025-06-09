import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../components/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-8 mb-5">Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => (
                        <Book key={book.bookId} book={book} />
                    ))

                }
            </div>
        </div>
    );
};

export default Books;