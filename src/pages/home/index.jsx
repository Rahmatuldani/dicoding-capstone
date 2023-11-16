import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);
    const [showAll, setShowAll] = useState(false);

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
        
                <Row>
                    {books.slice(0, showAll ? books.length : 6).map((book) => (
                        <Col md={2} className="mb-2" key={book.id}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={book.image}
                                />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.author}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className='d-flex justify-content-center'>
                    <Button onClick={() => setShowAll(!showAll)}>
                        {showAll? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                    </Button>
                </div>
        
            </Container>
        </>
    );
};

export default Home;
