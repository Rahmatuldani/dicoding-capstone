
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams   } from 'react-router-dom';
import { BsHeart, BsCartPlus   } from 'react-icons/bs';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
export const DetailBook = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams ();
    return (
        <section className='detail-book-page mt-4'>
            <Container>
                <Row>
                    <Col lg={9} className='mb-4'>
                        <Row className='pt-3 bg-white rounded desc-book'>
                            <Col lg={3} className='d-flex justify-content-center mb-4'>
                                <div className='img-section'>
                                    <Zoom>
                                        <Image src='/book-1.png' thumbnail />
                                    </Zoom>
                                </div>

                            </Col>
                            <Col lg={9} className='mb-4'>
                                <div className='title-section'>
                                    <p className='mb-0 text-muted'>Yoshihiro To, Rauhiyatul Jannah, Buddy Setianto</p>
                                    <h2>Standard Course HSK 1</h2>
                                </div>
                                <div className='desc-section'>
                                    <h3 className='fs-5'>Deskripsi</h3>
                                    <p>Dolar AS dan Euro bukanlah mata uang internasional yang sebenarnya, tapi mata uang Amerika Serikat dan Kawasan Euro yang “dipinjam” menjadi mata uang internasional. Kami mendesain mata uang internasional yang sesungguhnya, </p>
                                </div>
                                <div className='detail-section'>
                                    <h3 className='fs-5'>Detail</h3>
                                    <Row>
                                        <Col sm={6}>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>ISBN</h4>
                                                <p className='mb-0'>585665467856745</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Genre</h4>
                                                <p className='mb-0'>Bahasa</p>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Tahun</h4>
                                                <p className='mb-0'>2023</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Penerbit</h4>
                                                <p className='mb-0'>Erlangga</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} className='d-flex justify-content-center mb-4'>
                        <div className='box-button w-100'>
                            <div className="d-grid gap-2 p-4 bg-white rounded">
                                <Button variant="warning" size="lg">
                                    Like <BsHeart />
                                </Button>
                                <Button variant="primary" size="lg">
                                    Pinjam <BsCartPlus />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
