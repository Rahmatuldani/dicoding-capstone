import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import api from '../../data/api';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selector';

const FormBorrow = () => {
    const { currentUser } = useSelector(selectAuth);
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        const fetchBorrowedBooks = async () => {
            try {
                const userId = currentUser?._id;
                if (!userId) {
                    console.error('User ID not available');
                    return;
                }

                const borrowedData = await api.getAllBorrowed(userId);
                setBorrowedBooks(borrowedData.books || []);
            } catch (error) {
                console.error('Error fetching borrowed books:', error);
            }
        };

        fetchBorrowedBooks();
    }, [currentUser]);

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
                    {borrowedBooks.length > 0 &&
                        borrowedBooks.map((borrowedBook, index) => (
                            <tr key={index}>
                                <td>{borrowedBook.title}</td>
                                <td>{borrowedBook.quantity}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default FormBorrow;