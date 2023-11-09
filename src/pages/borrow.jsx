import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../store/borrow/selector';
import { addBorrowStart, fetchBorrowStart } from '../store/borrow/action';
import { Loading } from '../components';
import useInput from '../hooks/useInput';
import FormBorrow from '../components/formBorrow';

const Borrow = () => {
    const { borrow } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const [bookId, setBookId] = useInput('');
    const [memberId, setMemberId] = useInput('');
    const [startDate, setStartDate] = useState(''); 
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addBorrowStart({bookId, memberId, startDate, endDate}));
    }

    React.useEffect(() => {
        dispatch(fetchBorrowStart({id: 1}));
    }, [dispatch]);
    
    return (
        <>
            <FormBorrow
                onInputSubmit={handleSubmit}
                bookId={bookId}
                setBookId={setBookId}
                memberId={memberId}
                setMemberId={setMemberId}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <div>
                <h2>Riwayat Peminjaman</h2>
                {!borrow ? <Loading/> : 
                    borrow.map((item, index) => (
                        <React.Fragment key={index}>
                            <p>Book: {item.book.title}</p>
                            <p>ISBN: {item.book.isbn}</p>
                            <p>Nomor Anggota: {item.member.id}</p>
                            <p>Nama: {item.member.name}</p>
                            <p>Telepon: {item.member.phone}</p>
                            <p>Nomor Peminjaman: {item.id}</p>
                            <p>Tanggal Peminjaman: {item.startDate}</p>
                            <p>Tanggal Pengembalian: {item.endDate}</p>
                        </React.Fragment>
                    ))}
            </div>
        </>
    );
};

export default Borrow;