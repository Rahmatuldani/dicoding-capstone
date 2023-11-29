import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { useNavigate } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);

    return (
        <>
            <section className="home">
                <Image src="/hero.png" fluid />
            </section>

            <Container className="my-5">
                <h2 className="text-center mb-4">Buku Terbaru</h2>
        
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
                                        <BsFillHeartFill className='text-danger' />
                                        <small className="text-danger">
                                            {book.rate}
                                        </small>
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

            <Container className="my-5">
                <h2 className="text-center mb-4">Rekomendasi untuk Anda</h2>
        
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
                                        <BsFillHeartFill className='text-danger' />
                                        <small className="text-danger">
                                            {book.rate}
                                        </small>
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
