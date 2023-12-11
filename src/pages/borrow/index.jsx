import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBorrow } from '../../store/borrow/selector';
import { addBorrowStart, fetchBorrowStart } from '../../store/borrow/action';
import { Loading } from '../../components';
import useInput from '../../hooks/useInput';
import FormBorrow from './formBorrow';
import { Container, Modal, Table, Button } from 'react-bootstrap';

const Borrow = () => {
    const { borrow, isLoading } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const [isBookChecked, setIsBookChecked] = useState(false);
    const [bookTitle, setBookTitle] = useInput('');
    const [bookQuantity, setBookQuantity] = useState('');
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    function handleShowModal() {
        setShowConfirmationModal(true);
    }

    function handleCloseModal() {
        setShowConfirmationModal(false);
    }

    function handleSubmit() {
        dispatch(addBorrowStart({
            isBookChecked,
            bookTitle,
            bookQuantity,
        }));
        handleCloseModal();
    }

    React.useEffect(() => {
        dispatch(fetchBorrowStart({ id: 1 }));
    }, [dispatch]);

    return (
        <section className='m-4'>
            <h1 className='text-center mb-4'>Peminjaman Buku</h1>
            <section className='d-flex flex-wrap justify-content-center gap-4'>
                <FormBorrow
                    onInputSubmit={handleShowModal}
                    isBookChecked={isBookChecked}
                    setIsBookChecked={setIsBookChecked}
                    bookTitle={bookTitle}
                    setBookTitle={setBookTitle}
                    bookQuantity={bookQuantity}
                    setBookQuantity={setBookQuantity}
                />
            </section>

            <Modal show={showConfirmationModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi Peminjaman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Apakah Anda yakin ingin membuat pinjaman?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Buat Pinjaman
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <h2 className='mb-3 mt-3'>Riwayat Peminjaman</h2>
                {isLoading ? (
                    <Loading />
                ) : (
                    <section>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Judul Buku</th>
                                    <th>Jumlah Buku</th>
                                </tr>
                            </thead>
                            <tbody>
                                {borrow.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.bookTitle}</td>
                                        <td>{item.bookQuantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </section>
                )}
            </Container>
        </section>
    );
};

export default Borrow;