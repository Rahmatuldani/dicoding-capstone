import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { useNavigate } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);

    return (
        <>
            <section className="bg-primary text-light p-5">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Selamat Datang di Librify</h1>
                            <p>Pinjam dan baca berbagai buku menarik di sini.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="my-5">
                <h2 className="text-center mb-4">Daftar Buku Terbaru</h2>
        
                <Row className='mb-4'>
                    <Col className='d-flex flex-wrap justify-content-center gap-4'>
                        {books.slice(0, 5).map((book, index) => (
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
                                <Card.Img
                                    variant="top"
                                    src={book.image}
                                    style={{ 
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        aspectRatio: '1/1' 
                                    }}
                                    className='py-1 pt-3'
                                    onError= {() => {
                                        book.image = 'https://via.placeholder.com/150';
                                    }}
                                />
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
                        ))}
                    </Col>
                </Row>

                <div className='d-flex justify-content-center'>
                    <Button variant="primary"
                        onClick={() => navigate('/books')}
                    >
                        Lihat Semua
                    </Button>
                </div>
        
            </Container>
        </>
    );
};

export default Home;
