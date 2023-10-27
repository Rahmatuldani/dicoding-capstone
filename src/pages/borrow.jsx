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
                    <p key={index}>{item.isbn}</p>
                ))
            }
        </div>
    );
};

export default Borrow;