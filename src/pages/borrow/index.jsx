import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../../store/borrow/selector';
import { addBorrowStart, fetchBorrowStart } from '../../store/borrow/action';
import { Loading } from '../../components';
import useInput from '../../hooks/useInput';
import FormBorrow from './formBorrow';
import { Container, Table } from 'react-bootstrap';

const Borrow = () => {
    const { borrow, isLoading } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const [isBookChecked, setIsBookChecked] = useState(false);
    const [bookTitle, setBookTitle] = useInput('');
    const [bookQuantity, setBookQuantity] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addBorrowStart({
            isBookChecked,
            bookTitle,
            bookQuantity,
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
                    isBookChecked={isBookChecked}
                    setIsBookChecked={setIsBookChecked}
                    bookTitle={bookTitle}
                    setBookTitle={setBookTitle}
                    bookQuantity={bookQuantity}
                    setBookQuantity={setBookQuantity}
                />
            </section>
            <Container>
                <h2 className='mb-3 mt-3'>Riwayat Peminjaman</h2>
                {isLoading ? (
                    <Loading />
                ) : (
                    <section>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Judul Buku</th>
                                    <th>Jumlah Buku</th>
                                </tr>
                            </thead>
                            <tbody>
                                {borrow.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.bookTitle}</td>
                                        <td>{item.bookQuantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </section>
                )}
            </Container>
        </section>
    );
};

export default Borrow;