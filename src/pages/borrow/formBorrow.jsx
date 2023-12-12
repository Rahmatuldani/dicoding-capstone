import { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormBorrow = (params) => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [bookStates, setBookStates] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('cart')) || [];
        setBorrowedBooks(storedBooks);
    }, []);

    useEffect(() => {
        if (borrowedBooks.length > 0) {
            setBookStates(borrowedBooks.map(() => ({ isBookChecked: false, bookQuantity: 0 })));
        }
    }, [borrowedBooks]);

    const handleBookCheckChange = (index) => {
        setBookStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = {
                ...newStates[index],
                isBookChecked: !newStates[index].isBookChecked,
            };
            return newStates;
        });
    };

    const handleBookQuantityChange = (index, value) => {
        setBookStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].bookQuantity = value;
            return newStates;
        });
    };

    return (
        <Container>
            <h2 className='mb-3'>Keranjang</h2>
            <Form onSubmit={params.onInputSubmit}>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Pilih</th>
                            <th>Judul Buku</th>
                            <th>Jumlah Buku</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookStates.length > 0 &&
                            borrowedBooks.map((borrowedBook, index) => (
                                <tr key={index}>
                                    <td>
                                        <Form.Check
                                            type='checkbox'
                                            checked={bookStates[index].isBookChecked}
                                            onChange={() => handleBookCheckChange(index)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            required
                                            type='text'
                                            placeholder='Masukkan Judul Buku'
                                            value={borrowedBook.title}
                                            readOnly
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            required
                                            type='number'
                                            placeholder='Jumlah Buku'
                                            value={bookStates[index].bookQuantity}
                                            onChange={(e) => handleBookQuantityChange(index, e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <Button type='button' onClick={params.onInputSubmit}>Pinjam</Button>
            </Form>
        </Container>
    );
};

export default FormBorrow;