import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-8">Books</h2>
            <p>{books.length}</p>
        </div>
    );
};

export default Books;