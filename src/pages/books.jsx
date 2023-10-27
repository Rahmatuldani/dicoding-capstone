import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../store/books/selector';
import { fetchBooksStart } from '../store/books/action';
import { Loading } from '../components';

const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    return (
        <div>
            Books Page
            {!books ? <Loading/> : 
                books.map((book, index) => (
                    <div key={index}>{book.title}</div>
                ))
            }
        </div>
    );
};

export default Books;