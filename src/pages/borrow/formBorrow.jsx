import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormBorrow = ( params ) => {
    return (
        <Container>
            <h2 className='mb-3'>Input Peminjaman</h2>
            <Form onSubmit={ params.onInputSubmit }>
                <h3 className='mb-3'>Data Buku</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Judul Buku</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Masukkan Judul Buku'
                        value={ params.bookTitle }
                        onChange={ params.setBookTitle }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Penulis Buku</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Masukkan Penulis Buku'
                        value={ params.bookAuthor }
                        onChange={ params.setBookAuthor }
                    />
                </Form.Group>
                <h3 className='mb-3'>Waktu Peminjaman</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tanggal Peminjaman</Form.Label>
                    <Form.Control
                        required
                        type='date'
                        placeholder='Tanggal Peminjaman'
                        value={ params.startDate }
                        onChange={ (e) => params.setStartDate(e.target.value) }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tanggal Pengembalian</Form.Label>
                    <Form.Control
                        required
                        type='date'
                        placeholder='Tanggal Pengembalian'
                        value={ params.endDate }
                        onChange={ (e) => params.setEndDate(e.target.value) }
                    />
                </Form.Group>
                <Button type="submit">Buat Pinjaman</Button>
            </Form>
            
        </Container>
    );
};

export default FormBorrow;