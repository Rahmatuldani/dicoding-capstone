import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);

    useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary text-light p-5">
                <Container>
                    <Row>
                        <Col>
                            <h1>Selamat Datang di Librify</h1>
                            <p>Pinjam dan baca berbagai buku menarik di sini.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Book List Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Daftar Buku Terbaru</h2>
        
                <Row>
                    {books.map((book) => (
                        <Col md={3} className="mb-3" key={book.id}>
                            <Card>
                                <Card.Img src={book.image} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        
            </Container>
        </>
    );
};

export default Home;
