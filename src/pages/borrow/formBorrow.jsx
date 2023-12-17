import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import api from '../../data/api';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selector';

const FormBorrow = () => {
    const { currentUser } = useSelector(selectAuth);
    const [borrowedBooks, setBorrows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBorrow = async ({id}) => {
        try {
            setIsLoading(true);

            const borrow = await api.getBorrowById({id});
            console.log(borrow);
            setBorrows(borrow);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(true);
        }
    };

    useEffect(() => {
        const id = currentUser?._id;
        fetchBorrow({id});
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