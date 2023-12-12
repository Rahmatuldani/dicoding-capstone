import { useSelector } from 'react-redux';
import { useParams   } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { selectBooks } from '../../store/books/selector';
import { selectAuth } from '../../store/auth/selector';
import AlertUtil from '../../utils/alert';

import {
    Button,
    Col,
    Container,
    Image,
    Row
} from 'react-bootstrap';
import { BsHeart, BsCartPlus, BsHeartFill } from 'react-icons/bs';
import api from '../../data/api';


export const DetailBook = () => {
    const { id } = useParams();
    const { books } = useSelector(selectBooks);
    const { currentUser } = useSelector(selectAuth);
    const [ like, setLike ] = useState(false);
    const filteredBooks = books.filter((book) =>
        book._id.toLowerCase().includes(id.toLowerCase())
    );
    const [book] = filteredBooks;
    const isDisabled = book?.stock <= 0 ? true : false;

    useEffect(() => {
        if (book?.likes?.length > 0 && currentUser?._id === book.likes[0].userId) {
            setLike(true);
        }
    }, [book, currentUser]);

    const ButtonLikes = () => {
        let buttonText = 'Like';
        let buttonIcon = <BsHeart />;
        
        if (book?.likes?.length > 0 && currentUser?._id === book.likes[0].userId || like) {
            buttonText = 'Unlike';
            buttonIcon = <BsHeartFill />;
        }
    
        return (
            <Button 
                onClick={() => handleLikes(buttonText)} 
                className="btn-pink" 
                size="lg">
                {buttonText} {buttonIcon}
            </Button>
        );
    };

    const handleLikes = async (type) => {
        if (!currentUser) {
            AlertUtil('error', 'Silahkan login terlebih dahulu');
            return;
        }
    
        const data = {
            type: type.toLowerCase(),
            idBook: book._id,
            user: currentUser._id,
        };
    
        try {
            await api.createLike(data);
            
            setLike(type.toLowerCase() !== 'unlike');
        } catch (error) {
            AlertUtil('error', error.message || 'An error occurred');
        }
    };

    const handleAddToCart = (book) => {
        if (!currentUser) {
            AlertUtil('error', 'Silahkan login terlebih dahulu');
            return;
        }

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isExist = cart.find((item) => item.idBook === book._id);

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

            const newCart = cart.concat(bookCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
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
                                        {
                                            like ? (
                                                <BsHeartFill className='icon-pink' />
                                            ) : (
                                                <BsHeart className='icon-pink' />
                                            )
                                        }
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
                                {ButtonLikes()}
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