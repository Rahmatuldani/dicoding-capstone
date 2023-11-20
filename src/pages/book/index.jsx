/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { Loading } from '../../components';
import './style.css';
import { Alert, Container } from 'react-bootstrap';
import { 
     
    useNavigate 
} from 'react-router-dom';
import { SearchInput } from './components/SearchInput';
import { BookCard } from './components/BookCard';


const Books = () => {
    const { books } = useSelector(selectBooks);
    const [titleFilter, setTitleFilter] = useState('');
    const [debouncedTitleFilter, setDebouncedTitleFilter] = useState(titleFilter);
    
    const dispatch = useDispatch();
    
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(debouncedTitleFilter.toLowerCase())
    );

    useEffect(() => {
        const delay = setTimeout(() => {
            setDebouncedTitleFilter(titleFilter);
        }, 500);
    
        return () => clearTimeout(delay);
    }, [titleFilter]);

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    const isLoading = () => {
        if (filteredBooks.length === 0) {
            return false;
        }
        return <Loading/>;
    };

    return (
        <section className='books-page mt-4'>
            <h1 className='text-center mb-4'>Books Page</h1>
            <Container>
                <div className='container-md'>
                    <SearchInput 
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                    />
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        !filteredBooks || filteredBooks.length === 0
                            ? 
                            isLoading() || 
                            <Alert  variant='danger'>
                                <h5>No books found</h5>
                            </Alert>
                            : 
                            filteredBooks.map((book, index) => (
                                <BookCard
                                    key={index}
                                    book={book}
                                />
                            ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Books;