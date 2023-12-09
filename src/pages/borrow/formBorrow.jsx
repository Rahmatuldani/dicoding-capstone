import { Button, Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormBorrow = (params) => {
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
                            <th>Tanggal Peminjaman</th>
                            <th>Tanggal Pengembalian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Check
                                    type='checkbox'
                                    checked={params.isBookChecked}
                                    onChange={() => params.setIsBookChecked(!params.isBookChecked)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Masukkan Judul Buku'
                                    value={params.bookTitle}
                                    onChange={params.setBookTitle}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    required
                                    type='number'
                                    placeholder='Jumlah Buku'
                                    value={params.bookQuantity}
                                    onChange={(e) => params.setBookQuantity(e.target.value)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    required
                                    type='date'
                                    placeholder='Tanggal Peminjaman'
                                    value={params.startDate}
                                    onChange={(e) => params.setStartDate(e.target.value)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    required
                                    type='date'
                                    placeholder='Tanggal Pengembalian'
                                    value={params.endDate}
                                    onChange={(e) => params.setEndDate(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button type='submit'>Buat Pinjaman</Button>
            </Form>
        </Container>
    );
};

export default FormBorrow;