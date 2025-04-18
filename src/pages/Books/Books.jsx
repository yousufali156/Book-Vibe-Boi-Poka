import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

  

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // }, [])

    // const bookPromise=fetch('./booksData.json') .then (res=> res.json())

    return (
        <div>
            <h1>Hello I'm Books</h1>
            <Suspense fallback={
                <span>
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    <span className="loading loading-spinner text-success"></span>
                    <span className="loading loading-spinner text-warning"></span>
                    <span className="loading loading-spinner text-error"></span>
                </span>}>

                {/* <Book data={data}></Book> */}

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
              </div>


            </Suspense>
        </div>
    );
};

export default Books;