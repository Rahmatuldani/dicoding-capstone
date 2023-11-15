import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { Loading } from '../../components';
import { BsSearch } from 'react-icons/bs';
import { 
    Button, 
    Card, 
    Container, 
    InputGroup,
    Form
} from 'react-bootstrap';
import { 
     
    useNavigate 
} from 'react-router-dom';


const Books = () => {
    const { books } = useSelector(selectBooks);
    console.log(books);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    return (
        <section className='books-page mt-4'>
            <h1 className='text-center mb-4'>Books Page</h1>
            <Container>
                <div className='container-md'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Buku yang anda cari"
                            aria-label="Buku yang anda cari"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-primary" id="button-addon2">
                            <BsSearch />
                        </Button>
                    </InputGroup>
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        !books 
                            ? 
                            <Loading/> 
                            : 
                            books.map((book, index) => (
                                <Card as='a' 
                                    key={index} 
                                    style={{ 
                                        width: '18rem',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                    }} 
                                    onClick={() => navigate(`/books/${book._id}`)}
                                >
                                    <Card.Img variant="top" src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/c16202b2-c1bf-497d-9759-d16e47a051cf.png' />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text className="text-danger">{book.year}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Genre: {book.genre}</small>
                                    </Card.Footer>
                                </Card>
                            ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Books;