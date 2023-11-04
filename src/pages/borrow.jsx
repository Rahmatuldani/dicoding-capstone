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
                    <p key={index}>{item.book.isbn}</p>,
                    <p key={index}>{item.book.title}</p>,
                    <p key={index}>{item.member.id}</p>,
                    <p key={index}>{item.member.name}</p>,
                    <p key={index}>{item.member.phone}</p>,
                    <p key={index}>{item.borrow.id}</p>,
                    <p key={index}>{item.borrow.startDate}</p>,
                    <p key={index}>{item.borrow.endDate}</p>
                ))
            }
        </div>
    );
};

export default Borrow;