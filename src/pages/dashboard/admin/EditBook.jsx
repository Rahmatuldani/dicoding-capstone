import { useDispatch, useSelector } from 'react-redux';
import { insertBooksStart } from '../../../store/books/action';
import { useFormik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import SlideBar from '../SlideBar';
import { useParams } from 'react-router-dom';
import { selectBooks } from '../../../store/books/selector';

const EditBookAdmin = () => {
    const formRef = useRef(null);
    const { id } = useParams();
    const { books } = useSelector(selectBooks);
    const filteredBooks = books.filter((book) =>
        book._id.toLowerCase().includes(id.toLowerCase())
    );
    const [book] = filteredBooks;
    const [isLoading, setLoading] = useState(false);

    function addNewBook() {
        setLoading(true);
        const newBook = {
            isbn: formik.values.isbn,
            title: formik.values.title,
            year: formik.values.year,
            genre: formik.values.genre,
            author: formik.values.author,
            publisher: formik.values.publisher,
            desc: formik.values.desc,
            stock: formik.values.stock,
            price: formik.values.price,
        };
        console.log(newBook);
        /* formRef.current.reset();
        formik.resetForm(); */
        setLoading(false);
    }

    const formik = useFormik({
        initialValues: {
            isbn: book.isbn ?? '',
            title: book.title ?? '',
            year: book.year ?? '',
            genre: (book.genre ?? []).join(', '),
            author: (book.author ?? []).join(', '),
            publisher: book.publisher ?? '',
            desc: book.desc ?? '',
            stock: book.stock ?? '',
            price: book.price ?? '',
        },
        onSubmit: addNewBook,
        
        validationSchema: yup.object().shape({
            'isbn': yup.string().required('ISBN harus diisi'),
            'title': yup.string().required('Nama buku harus diisi').min(3, 'Nama buku minial 3 karakter').max(100, 'Nama buku maksimal 50 karakter'),
            'year': yup.number().required('Tahun terbit harus diisi'),
            'genre': yup.string().required('Genre harus diisi'),
            'author': yup.string().required('Penulis harus diisi').min(3, 'Penulis minimal 3 karakter').max(100, 'Penulis maksimal 50 karakter'),
            'publisher': yup.string().required('Penerbit harus diisi').min(3, 'Penerbit minimal 3 karakter').max(50, 'Penerbit maksimal 50 karakter'),
            'desc': yup.string().required('Deskripsi harus diisi').min(10, 'Deskripsi minimal 10 karakter').max(250, 'Deskripsi maksimal 250 karakter'),
            'price': yup.number().required('Harga harus diisi'),
            'stock': yup.number().required('Harga harus diisi'),
        })
    });

    const handleForm = (event) => {
        const { target } = event;
        formik.setFieldValue(target.name, target.value);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='addBook'/>
                    <div className='col '>
                        <div className='mt-3'>
                            <h4>Tambah Buku</h4>
                            <Form ref={formRef} onSubmit={ formik.handleSubmit }>
                                <Form.Group className="mb-3" controlId="validationFormik01">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        name='isbn'
                                        value={formik.values.isbn}
                                        type='number' 
                                        placeholder='ISBN' 
                                        onChange={ handleForm }
                                        isInvalid={formik.errors.isbn}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.isbn}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik02">
                                    <Form.Label>Nama Buku</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        name='title'
                                        value={formik.values.title}
                                        type='text'
                                        placeholder='nama buku'
                                        onChange={ handleForm } 
                                        isInvalid={formik.errors.title}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.title}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik03">
                                    <Form.Label>Tahun</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='number'
                                        name='year'
                                        value={formik.values.year}
                                        placeholder='Tahun buku'
                                        onChange={ handleForm } 
                                        isInvalid={formik.errors.year}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.year}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik04">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='text'
                                        name='genre'
                                        value={formik.values.genre}
                                        placeholder='Genre buku'
                                        onChange={ handleForm } 
                                        isInvalid={formik.errors.genre}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.genre}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik05">
                                    <Form.Label>Penulis</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='text'
                                        name='author'
                                        value={formik.values.author}
                                        placeholder='Penulis buku'
                                        onChange={ handleForm }
                                        isInvalid={formik.errors.author}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.author}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik06">
                                    <Form.Label>Penerbit</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='text'
                                        name='publisher'
                                        value={formik.values.publisher}
                                        placeholder='Penerbit buku'
                                        onChange={ handleForm }
                                        isInvalid={formik.errors.publisher}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.publisher}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik07">
                                    <Form.Label>Stok</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='number'
                                        name='stock'
                                        value={formik.values.stock}
                                        placeholder='Stok buku'
                                        onChange={ handleForm }
                                        isInvalid={formik.errors.stock}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.stock}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik08">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        className='border-primary-subtle'
                                        type='number'
                                        name='price'
                                        value={formik.values.price}
                                        placeholder='Price buku'
                                        onChange={ handleForm }
                                        isInvalid={formik.errors.price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationFormik09">
                                    <FloatingLabel controlId="floatingTextarea2" label="Deskripsi">
                                        <Form.Control
                                            as="textarea"
                                            name='desc'
                                            value={formik.values.desc}
                                            placeholder="Deskripsi buku"
                                            style={{ height: '100px' }}
                                            onChange={ handleForm }
                                            isInvalid={formik.errors.desc}
                                        />
                                    </FloatingLabel>
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.desc}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button 
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading…' : 'Simpan'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default EditBookAdmin;