/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { Loading } from '../../components';
import { BsSearch, BsFillStarFill } from 'react-icons/bs';
import './style.css';
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
    const [valueSearch, setValueSearch] = useState('');
    const [filteredData, setFilteredData] = useState(books);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSearch = (event) => {
        const valueSearchToLowerCase = event.target.value.toLowerCase();
        setValueSearch(valueSearchToLowerCase);
        
        const filteredResults = books.filter(book =>
            book.title.toLowerCase().includes(valueSearchToLowerCase)
        );
            
        setFilteredData(filteredResults);
    };
        
    console.log(valueSearch);
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
                            type="text"
                            className='border-primary-subtle'
                            placeholder="Buku yang anda cari"
                            aria-label="Buku yang anda cari"
                            aria-describedby="basic-addon2"
                            value={valueSearch}
                            onChange={handleSearch}
                        />
                        <Button variant="outline-primary" disabled id="button-addon2">
                            <BsSearch />
                        </Button>
                    </InputGroup>
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-4'>
                    {
                        !filteredData 
                            ? 
                            <Loading/> 
                            : 
                            filteredData.map((book, index) => (
                                <Card as='a'
                                    className='hoverable' 
                                    key={index} 
                                    style={{ 
                                        width: '12rem',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                    }} 
                                    onClick={() => navigate(`/books/${book._id}`)}
                                >
                                    <Card.Img variant="top" src='/book-1.png' className='py-1 pt-3'/>
                                    <Card.Body className='d-flex flex-column gap-2'>
                                        <div className='d-flex align-items-center gap-1'>
                                            <small className="text-danger">
                                                Rate: {book.rate}
                                            </small> 
                                            <BsFillStarFill className='text-warning' />
                                        </div>
                                        <Card.Subtitle className='lh-sm'>{book.title}</Card.Subtitle>
                                        <Card.Text>{book.year}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Books;