import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../store/books/selector';
import React from 'react';
import { fetchBooksStart } from '../store/books/action';

const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();
    console.log(books);

    React.useState(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    return (
        <div>
            Books Page
            {books.map(book => (
                <div key={book.isbn}>{book.title}</div>
            ))}
        </div>
    );
};

export default Books;