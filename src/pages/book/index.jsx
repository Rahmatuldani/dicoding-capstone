/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Pagination, Spinner } from 'react-bootstrap';

import { selectBooks } from '../../store/books/selector';
import { fetchBooksPageStart, fetchBooksStart } from '../../store/books/action';

import { BookCard } from '../../components/BookCard';

import './style.css';


const Books = () => {
    const { books, pages, isLoading } = useSelector(selectBooks);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const currentItems = books;
    const totalPages = pages;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const page = currentPage;
        dispatch(fetchBooksStart({page}));
        dispatch(fetchBooksPageStart());
    }, [currentPage, dispatch]);

    const alretNotFound = () => {
        return (
            <Alert  variant='danger'>
                <h5>Data buku tidak ada</h5>
            </Alert>
        );
    };

    return (
        <section className='books-page mt-4'>
            <h1 className='text-center mb-4'>Daftar Buku</h1>
            <Container>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        isLoading ?
                            <Alert  variant='primary'>
                                <div className='d-flex flex-column gap-1 justify-content-center align-items-center'>
                                    <Spinner animation="border" variant="primary" /> 
                                    <h5> Loading...</h5>
                                </div>
                            </Alert>
                            : 
                            books.length === 0 ?
                                alretNotFound()
                                : 
                                currentItems.map((book, index) => (
                                    <BookCard
                                        key={index}
                                        book={book}
                                    />
                                ))
                    }
                </div>
                <Pagination className='pt-5 d-flex justify-content-center align-items-center'>
                    <Pagination.Prev 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1} 
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item 
                            key={index} 
                            onClick={() => handlePageChange(index + 1)}
                            active={currentPage === index + 1}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}/>
                </Pagination>
            </Container>
        </section>
    );
};

export default Books;