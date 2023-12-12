import { useSelector } from 'react-redux';
import Zoom from 'react-medium-image-zoom';
import { useParams   } from 'react-router-dom';
import { BsHeart, BsCartPlus, BsHeartFill } from 'react-icons/bs';
import { selectBooks } from '../../store/books/selector';

import {
    Button,
    Col,
    Container,
    Image,
    Row
} from 'react-bootstrap';

import 'react-medium-image-zoom/dist/styles.css';
import { selectAuth } from '../../store/auth/selector';
import AlertUtil from '../../utils/alert';

export const DetailBook = () => {
    const { id } = useParams();
    const { books } = useSelector(selectBooks);
    const filteredBooks = books.filter((book) =>
        book._id.toLowerCase().includes(id.toLowerCase())
    );
    const [book] = filteredBooks;
    const isDisabled = book?.stock <= 0 ? true : false;

    const { currentUser } = useSelector(selectAuth);

    const handleAddToCart = (book) => {
        if (!currentUser) {
            AlertUtil('error', 'Silahkan login terlebih dahulu');
            return;
        }
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isExist = cart.find((item) => item._id === book._id);
        if (isExist) {
            AlertUtil('error', 'Buku sudah ada di keranjang');
        } else {
            const bookCart = {
                user: currentUser._id,
                idBook: book._id,
                title: book.title,
                stock: book.stock,
                qty: 1,
            };
            cart.push(bookCart);
            localStorage.setItem('cart', JSON.stringify(cart));
            AlertUtil('success', 'Buku berhasil ditambahkan ke keranjang');
        }
    };
    return (
        <section className='detail-book-page mt-4'>
            <Container>
                <Row>
                    <Col lg={9} className='mb-4'>
                        <Row className='pt-3 bg-white rounded desc-book'>
                            <Col lg={3} className='d-flex justify-content-center mb-4'>
                                <div className='img-section'>
                                    <Zoom>
                                        <Image src={`http://localhost:5000/api/books/${book?.poster}/poster`} thumbnail />
                                    </Zoom>
                                </div>

                            </Col>
                            <Col lg={9} className='mb-4 d-flex flex-column gap-3'>
                                <div className='title-section'>
                                    <p className='mb-0 text-muted'>{book.author}</p>
                                    <h2>{book.title}</h2>
                                    <div className='d-flex align-items-center gap-1'>
                                        <BsHeartFill className='icon-pink' />
                                        <small className="text-danger">
                                            {book.rate}
                                        </small>
                                    </div>
                                </div>
                                <div className='desc-section'>
                                    <h3 className='fs-5'>Deskripsi</h3>
                                    <p>{book.desc}</p>
                                </div>
                                <div className='detail-section'>
                                    <h3 className='fs-5'>Detail</h3>
                                    <Row>
                                        <Col sm={6}>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>ISBN</h4>
                                                <p className='mb-0'>{book.isbn}</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Genre</h4>
                                                <p className='mb-0'>{book.genre}</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Penulis</h4>
                                                <p className='mb-0'>{book.author}</p>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Tahun</h4>
                                                <p className='mb-0'>{book.year}</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Penerbit</h4>
                                                <p className='mb-0'>{book.publisher}</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='fs-6'>Stok</h4>
                                                <p className='mb-0'>{book.stock}</p>
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
                                <Button className="btn-pink" size="lg">
                                    Like <BsHeart />
                                </Button>
                                <Button 
                                    disabled={isDisabled} 
                                    onClick={() => handleAddToCart(book)}
                                    variant="primary" size="lg">
                                    Keranjang <BsCartPlus />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};