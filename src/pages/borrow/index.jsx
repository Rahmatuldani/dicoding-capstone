import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../../store/borrow/selector';
import { addBorrowStart, fetchBorrowStart } from '../../store/borrow/action';
import { Loading } from '../../components';
import useInput from '../../hooks/useInput';
import FormBorrow from './formBorrow';
import { Card, Container } from 'react-bootstrap';

const Borrow = () => {
    const { borrow, isLoading } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const [bookTitle, setBookTitle] = useInput('');
    const [bookAuthor, setBookAuthor] = useInput('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addBorrowStart({
            bookTitle,
            bookAuthor,
            startDate,
            endDate,
        }));
    }

    React.useEffect(() => {
        dispatch(fetchBorrowStart({ id: 1 }));
    }, [dispatch]);

    return (
        <section className='m-4'>
            <h1 className='text-center mb-4'>Peminjaman Buku</h1>
            <section className='d-flex flex-wrap justify-content-center gap-4'>
                <FormBorrow
                    onInputSubmit={handleSubmit}
                    bookTitle={bookTitle}
                    setBookTitle={setBookTitle}
                    bookAuthor={bookAuthor}
                    setBookAuthor={setBookAuthor}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
            </section>
            <Container>
                <h2 className='mb-3 mt-3'>Riwayat Peminjaman</h2>
                {isLoading ? (
                    <Loading />
                ) : (
                    <section className='d-flex flex-wrap justify-content-start gap-4'>
                        {borrow.map((item, index) => (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='mb-2'>{item.bookTitle}</Card.Title>
                                    <Card.Subtitle className='mb-3 text-muted'>
                                        {item.bookAuthor}
                                    </Card.Subtitle>
                                    <Card.Text className='mb-1 text-muted'>
                                        Tanggal Peminjaman: {item.startDate}
                                    </Card.Text>
                                    <Card.Text className='text-muted'>
                                        Tanggal Pengembalian: {item.endDate}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </section>
                )}
            </Container>
        </section>
    );
};

export default Borrow;