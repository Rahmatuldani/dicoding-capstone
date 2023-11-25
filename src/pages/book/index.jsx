/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Pagination } from 'react-bootstrap';

import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';

import { Loading } from '../../components';
import { SearchInput } from './components/SearchInput';
import { BookCard } from './components/BookCard';

import './style.css';


const Books = () => {
    const { books } = useSelector(selectBooks);
    const [titleFilter, setTitleFilter] = useState('');
    const [debouncedTitleFilter, setDebouncedTitleFilter] = useState(titleFilter);

    const [currentPage, setCurrentPage] = useState(1);
    
    const dispatch = useDispatch();
    
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(debouncedTitleFilter.toLowerCase())
    );

    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            setDebouncedTitleFilter(titleFilter);
        }, 500);
    
        return () => clearTimeout(delay);
    }, [titleFilter]);

    useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    const isLoading = () => {
        if (currentItems.length === 0) {
            return false;
        }
        return <Loading/>;
    };

    return (
        <section className='books-page mt-4'>
            <h1 className='text-center mb-4'>Daftar Buku</h1>
            <Container>
                <div className='container-md'>
                    <SearchInput 
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                    />
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        !currentItems || currentItems.length === 0
                            ? 
                            isLoading() || 
                            <Alert  variant='danger'>
                                <h5>Buku tidak ada</h5>
                            </Alert>
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