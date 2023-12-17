import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { useNavigate } from 'react-router-dom';
import { BookCard } from '../../components/BookCard';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);
    const navigate = useNavigate();

    useEffect(() => {
        const page = 1;
        dispatch(fetchBooksStart({page}));
    }, [dispatch]);

    return (
        <>
            <section className="home">
                <Image src="/hero.png" className="d-none d-md-block img-fluid" style={{width: '100%'}} />
                <Image src="/hero-mobile.png" className="d-block d-md-none img-fluid" style={{ width: '100%', aspectRatio: '1/1' }} />
            </section>

            <Container className="my-5">
                <h2 className="text-center mb-4">Buku Terbaru</h2>

                <Row className='mb-4'>
                    {books.slice(0, 4).map((book, index) => (
                        <Col xs={6} md={4} lg={3} key={index} className='d-flex flex-wrap justify-content-center gap-4'>
                            <BookCard
                                key={index}
                                book={book}
                            />
                        </Col>
                    ))}
                </Row>

                <div className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={() => navigate('/books')}>
                        Lihat Semua
                    </Button>
                </div>

            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4">Buku Terpopuler</h2>
                
                <Row className='mb-4'>
                    {books.slice(0, 4).map((book, index) => (
                        <Col xs={6} md={4} lg={3} key={index} className='d-flex flex-wrap justify-content-center gap-4'>
                            <BookCard
                                key={index}
                                book={book}
                            />
                        </Col>
                    ))}
                </Row>

                <div className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={() => navigate('/books')}>
                        Lihat Semua
                    </Button>
                </div>

            </Container>
        </>
    );
};

export default Home;