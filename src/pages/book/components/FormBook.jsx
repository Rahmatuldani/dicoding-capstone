import { Button, Container, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const FormBook = ( params ) => {
    return (
        <Container className='form-book-component'>
            <Form onSubmit={ params.onInputSubmit }>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        required
                        type='number' 
                        placeholder='ISBN' 
                        value={ params.isbn } 
                        onChange={ params.setIsbn } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama Buku</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        required
                        type='text'
                        placeholder='nama buku'
                        value={ params.title }
                        onChange={ params.setTitle } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tahun</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        type='number'
                        maxLength='4'
                        placeholder='Tahun buku'
                        required
                        value={ params.year }
                        onChange={ params.setYear } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='genre'
                        type='text'
                        placeholder='Genre buku'
                        required
                        value={ params.genre }
                        onChange={ params.setGenre } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='author'
                        type='text'
                        placeholder='Author buku'
                        required
                        value={ params.author }
                        onChange={ params.setAuthor } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='publisher'
                        type='text'
                        placeholder='Publisher buku'
                        required
                        value={ params.publisher }
                        onChange={ params.setPublisher } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='price'
                        type='number'
                        placeholder='Price buku'
                        required
                        value={ params.price }
                        onChange={ params.setPrice }  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Poster</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='poster'
                        type='text'
                        placeholder='Poster buku'
                        required
                        value={ params.poster }
                        onChange={ params.setPoster }  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <FloatingLabel controlId="floatingTextarea2" label="Deskripsi">
                        <Form.Control
                            as="textarea"
                            name='desc'
                            placeholder="Deskripsi buku"
                            style={{ height: '100px' }}
                            required
                            value={ params.desc }
                            onChange={ params.setDesc }  
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button type="submit">Simpan</Button>
            </Form>
        </Container>
    );
};

export default FormBook;