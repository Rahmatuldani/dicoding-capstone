import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const FormBorrow = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [bookStates, setBookStates] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('cart')) || [];
        setBorrowedBooks(storedBooks);
    }, []);

    useEffect(() => {
        if (borrowedBooks.length > 0) {
            setBookStates(borrowedBooks.map(() => ({ isBookChecked: false, bookQuantity: 1 })));
        }
    }, [borrowedBooks]);

    return (
        <Container>
            <h2 className='mb-3'>Buku yang Dipinjam</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Judul Buku</th>
                        <th>Jumlah Buku</th>
                    </tr>
                </thead>
                <tbody>
                    {bookStates.length > 0 &&
                            borrowedBooks.map((borrowedBook, index) => (
                                <tr key={index}>
                                    <td>
                                        {borrowedBook.title}
                                    </td>
                                    <td>
                                        {bookStates[index].bookQuantity}
                                    </td>
                                </tr>
                            ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default FormBorrow;