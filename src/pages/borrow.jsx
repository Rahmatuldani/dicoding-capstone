import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../store/borrow/selector';
import { fetchBorrowStart } from '../store/borrow/action';
import { Loading } from '../components';

const Borrow = () => {
    const { borrow } = useSelector(selectBorrow);
    const dispatch = useDispatch();

    React.useState(() => {
        dispatch(fetchBorrowStart({id: 1}));
    }, [dispatch]);
    
    return (
        <div>
            Borrow History Page
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
    );
};

export default Borrow;