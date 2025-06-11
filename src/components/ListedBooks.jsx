import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredReadList } from '../Utility/addToDb';
import { getStoredWishList } from '../Utility/addToDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from './Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList]=useState([]);
    const [wishList, setWishList]=useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id=>parseInt(id))
        const readBookList = allBooks.filter(Book => storedReadListInt.includes(Book.bookId));
        setReadList(readBookList);
    },[allBooks])
    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id=>parseInt(id))
        const wishBookList = allBooks.filter(Book => storedWishListInt.includes(Book.bookId));
        setWishList(wishBookList);
    },[allBooks])
    return (
        <div>
            <h3 className='text-3xl my-8'>ListedBooks</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    <div className='lg:flex'>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>Books I Wish To Read: {wishList.length}</h2>
                    <div className='lg:flex'>
                    {
                        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;