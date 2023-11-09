import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart, insertBooksStart } from '../../store/books/action';
import { Loading } from '../../components';
import useInput from '../../hooks/useInput';
import FormBook from './formBook';
import { Card, Container } from 'react-bootstrap';


const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();
    const [isbn, setIsbn] = useInput('');
    const [title, setTitle] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!validationForm()) {
            return;
        }
        dispatch(insertBooksStart({isbn, title}));
    }

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    const validationForm = () => {
        if (isbn.trim() === '') {
            alert('Please enter an ISBN');
            return false;
        }
        if (title.trim() === '') {
            alert('Please enter a title');
            return false;
        }
        return true;
    };
    return (
        <section className='m-4'>
            <h1 className='text-center mb-4'>Books Page</h1>
            <section className='d-flex flex-wrap justify-content-center gap-4'>
                <FormBook 
                    onInputSubmit={handleSubmit}
                    isbn={isbn}
                    setIsbn={setIsbn}
                    title={title} 
                    setTitle={setTitle}
                />
            </section>

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