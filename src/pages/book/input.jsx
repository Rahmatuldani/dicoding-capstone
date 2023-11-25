import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { insertBooksStart } from '../../store/books/action';
import useInput from '../../hooks/useInput';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';

const AddBook = () => {
    /* const dispatch = useDispatch();
    const [isbn, setIsbn] = useInput('');
    const [title, setTitle] = useInput('');
    const [tahun, setTahun] = useInput('');
    const [genre, setGenre] = useInput('');
    const [author, setAuthor] = useInput('');
    const [publisher, setPublisher] = useInput('');
    const [desc, setDesc] = useInput('');
    const [price, setPrice] = useInput('');
    const [poster, setPoster] = useInput(''); */

    function addNewBook() {
        /* if (!validationForm()) {
            return;
        }
        dispatch(insertBooksStart({isbn, title})); */
        alert(formik.values.title);
    }

    const formik = useFormik({
        initialValues: {
            isbn: '',
            title: '',
            year: '',
            genre: '',
            author: '',
            publisher: '',
            desc: '',
            price: '',
            poster: ''
        },
        onSubmit: addNewBook,
    });

    const handleForm = (event) => {
        const { target } = event;
        formik.setFieldValue(target.name, target.value);
    };

    return (
        <section className='container add-book-page mt-4'>
            <h1 className='text-center mb-4'>Tambah Buku</h1>
            <section className='bg-white d-flex flex-wrap justify-content-center gap-4 border border-primary-subtle rounded p-3'>
                <Container className='form-book-component'>
                    <Form onSubmit={ formik.handleSubmit }>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='isbn'
                                type='text' 
                                placeholder='ISBN' 
                                onChange={ handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tahun</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='year'
                                type='text'
                                placeholder='nama buku'
                                onChange={ handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='title'
                                type='text'
                                placeholder='Nama buku'
                                value={formik.values.title}
                                onChange={handleForm}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='genre'
                                type='text'
                                placeholder='Genre buku'
                                onChange={  handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='author'
                                type='text'
                                placeholder='Author buku'
                                onChange={  handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='publisher'
                                type='text'
                                placeholder='Publisher buku'
                                onChange={  handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='price'
                                type='text'
                                placeholder='Price buku'
                                onChange={  handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control
                                className='border-primary-subtle'
                                name='poster'
                                type='text'
                                placeholder='Poster buku'
                                onChange={  handleForm } 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <FloatingLabel controlId="floatingTextarea2" label="Deskripsi">
                                <Form.Control
                                    as="textarea"
                                    name='desc'
                                    placeholder="Deskripsi buku"
                                    style={{ height: '100px' }}
                                    onChange={  handleForm } 
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Button type="submit">Simpan</Button>
                    </Form>
                </Container>
            </section>
        </section>
    );
};



export default AddBook;
