import { useState } from 'react';
import useInput from '../../hooks/useInput';
import FormBorrow from './formBorrow';

const Borrow = () => {
    const [bookTitle, setBookTitle] = useInput('');
    const [bookQuantity, setBookQuantity] = useState('');

    return (
        <section className='m-4'>
            <h1 className='text-center mb-4'>Peminjaman Buku</h1>
            <section className='d-flex flex-wrap justify-content-center gap-4'>
                <FormBorrow
                    bookTitle={bookTitle}
                    setBookTitle={setBookTitle}
                    bookQuantity={bookQuantity}
                    setBookQuantity={setBookQuantity}
                />
            </section>
        </section>
    );
};

export default Borrow;