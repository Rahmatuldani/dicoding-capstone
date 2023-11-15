
import { Button, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import { useParams   } from 'react-router-dom';
export const DetailBook = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams ();
    return (
        <section className='detail-book-page mt-4'>
            <Container className='d-flex flex-wrap justify-content-center'>
                <h2>Standard Course HSK 1</h2>
                <Stack>
                    <div className='d-flex flex-wrap justify-content-center gap-2'>
                        <Card style={{ width: '18rem' }}>
                            <Image src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/c16202b2-c1bf-497d-9759-d16e47a051cf.png' thumbnail />
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">ISBN</Card.Subtitle>
                                <Card.Text>
                                    9787561937099
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Year</Card.Subtitle>
                                <Card.Text>
                                    2023
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Genre</Card.Subtitle>
                                <Card.Text>
                                    Jiang Liping
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                                <Card.Text>
                                    Jiang Liping, Wang Fang, Liu Liping
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Publisher</Card.Subtitle>
                                <Card.Text>
                                    Beijing Language And Culture, University Press
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
                                <Card.Text>
                                    80.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <div className="d-grid gap-2 p-3">
                                <Button variant="warning" size="lg">
                                    Keranjang
                                </Button>
                                <Button variant="primary" size="lg">
                                    Pinjam
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Stack>
{/*                 <Row className='d-flex flex-wrap justify-content-center gap-4'>
                    <Col lg>
                        <Card style={{ width: '18rem' }}>
                            <Image src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/c16202b2-c1bf-497d-9759-d16e47a051cf.png' thumbnail />
                        </Card>
                        
                    </Col>
                    <Col lg>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">ISBN</Card.Subtitle>
                                <Card.Text>
                                    9787561937099
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Year</Card.Subtitle>
                                <Card.Text>
                                    2023
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Genre</Card.Subtitle>
                                <Card.Text>
                                    Jiang Liping
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                                <Card.Text>
                                    Jiang Liping, Wang Fang, Liu Liping
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Publisher</Card.Subtitle>
                                <Card.Text>
                                    Beijing Language And Culture, University Press
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
                                <Card.Text>
                                    80.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg>
                        <Card style={{ width: '18rem' }}>
                            <div className="d-grid gap-2 p-3">
                                <Button variant="warning" size="lg">
                                    Keranjang
                                </Button>
                                <Button variant="primary" size="lg">
                                    Pinjam
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
};
