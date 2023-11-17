import { Container, Row, Col, Card, Button, Tab,Tabs } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBooks } from '../../store/books/selector';
import { fetchBooksStart } from '../../store/books/action';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(selectBooks);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();
    const genres = ['History', 'Biography', 'Art', 'Fiction', 'Non-Fiction'];

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

            <Container className='mt-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
                <Tabs defaultActiveKey={genres[0]} id="genre-tabs" className="mb-5">
                    {genres.map(genre => (
                        <Tab eventKey={genre} title={genre} key={genre}>
                            {genre}
                        </Tab>
                    ))}
                </Tabs>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4">Daftar Buku Terbaru</h2>
        
                <Row>
                    {books.slice(0, showAll ? books.length : 6).map((book) => (
                        <Col md={2} className="mb-2" key={book.id}>
                            <Card
                                onClick={() => navigate(`/books/${book.id}`)}
                                className="shadow-sm"
                                style={{cursor: 'pointer'}}
                            >
                                <Card.Img
                                    variant="top"
                                    src={book.image}
                                    onError= {() => {
                                        book.image = 'https://via.placeholder.com/150';
                                    }}
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
