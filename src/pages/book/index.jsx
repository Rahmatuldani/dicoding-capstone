import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { Loading } from '../../components';
import { Card, Container } from 'react-bootstrap';


const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    return (
        <section className='m-4'>
            <h1 className='text-center mb-4'>Books Page</h1>
            <Container>
                <h2 className='mb-3 mt-3'>List Books</h2>
                <section className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        !books 
                            ? 
                            <Loading/> 
                            : 
                            books.map((book, index) => (
                                <Card key={index} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            ))
                    }
                </section>
            </Container>
        </section>
    );
};

export default Books;