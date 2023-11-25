import { Button, Container, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const FormBook = ( params ) => {
    console.log(params);
    return (
        <Container className='form-book-component'>
            <Form onSubmit={ params.onSubmit }>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='isbn'
                        type='text' 
                        placeholder='ISBN' 
                        onChange={ params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tahun</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='year'
                        type='text'
                        placeholder='nama buku'
                        onChange={ params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='title'
                        type='text'
                        placeholder='Nama buku'
                        value={params.formik.values.title}
                        onChange={(e) => {
                            params.formik.handleChange(e);
                            
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='genre'
                        type='text'
                        placeholder='Genre buku'
                        onChange={  params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='author'
                        type='text'
                        placeholder='Author buku'
                        onChange={  params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='publisher'
                        type='text'
                        placeholder='Publisher buku'
                        onChange={  params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='price'
                        type='text'
                        placeholder='Price buku'
                        onChange={  params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Poster</Form.Label>
                    <Form.Control
                        className='border-primary-subtle'
                        name='poster'
                        type='text'
                        placeholder='Poster buku'
                        onChange={  params.onChange } 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <FloatingLabel controlId="floatingTextarea2" label="Deskripsi">
                        <Form.Control
                            as="textarea"
                            name='desc'
                            placeholder="Deskripsi buku"
                            style={{ height: '100px' }}
                            onChange={  params.onChange } 
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button type="submit">Simpan</Button>
            </Form>
        </Container>
    );
};

export default FormBook;