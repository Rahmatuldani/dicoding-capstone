import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../../store/borrow/selector';
import { addBorrowStart, fetchBorrowStart } from '../../store/borrow/action';
import { Loading } from '../../components';
import useInput from '../../hooks/useInput';
import FormBorrow from './formBorrow';
import { Container } from 'react-bootstrap';

const Borrow = () => {
    const { borrow, isLoading } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const [isBookChecked, setIsBookChecked] = useState(false);
    const [bookTitle, setBookTitle] = useInput('');
    const [bookAuthor, setBookAuthor] = useInput('');
    const [bookQuantity, setBookQuantity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addBorrowStart({
            isBookChecked,
            bookTitle,
            bookAuthor,
            bookQuantity,
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
                    isBookChecked={isBookChecked}
                    setIsBookChecked={setIsBookChecked}
                    bookTitle={bookTitle}
                    setBookTitle={setBookTitle}
                    bookAuthor={bookAuthor}
                    setBookAuthor={setBookAuthor}
                    bookQuantity={bookQuantity}
                    setBookQuantity={setBookQuantity}
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
                    <section>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Judul Buku</th>
                                    <th>Jumlah Buku</th>
                                    <th>Tanggal Peminjaman</th>
                                    <th>Tanggal Pengembalian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {borrow.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.bookTitle}</td>
                                        <td>{item.bookQuantity}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}
            </Container>
        </section>
    );
};

export default Borrow;