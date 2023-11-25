import FormBook from './components/FormBook';
import { useDispatch } from 'react-redux';
import { insertBooksStart } from '../../store/books/action';
import useInput from '../../hooks/useInput';
import { useFormik } from 'formik';

const AddBook = () => {
    const dispatch = useDispatch();
    const [isbn, setIsbn] = useInput('');
    const [title, setTitle] = useInput('');
    const [year, setYear] = useInput('');
    const [genre, setGenre] = useInput('');
    const [author, setAuthor] = useInput('');
    const [publisher, setPublisher] = useInput('');
    const [desc, setDesc] = useInput('');
    const [price, setPrice] = useInput('');
    const [poster, setPoster] = useInput('');


    function handleSubmit(event) {
        event.preventDefault();
        if (!validationForm()) {
            return;
        }
        dispatch(insertBooksStart({
            isbn,
            title,
            year,
            genre,
            author,
            publisher,
            price,
            poster,
            desc,

        }));
    }

    const formik = useFormik({
        initialValues: {
            isbn: '',
            title: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    const validationForm = () => {
        if (isbn.trim() === '') {
            alert('Please enter an ISBN');
            return false;
        }
        if (title.trim() === '') {
            alert('Please enter a title');
            return false;
        }
        return true;
    };

    return (
        <section className='container add-book-page mt-4'>
            <h1 className='text-center mb-4'>Tambah Buku</h1>
            <section className='bg-white d-flex flex-wrap justify-content-center gap-4 border border-primary-subtle rounded p-3'>
                <FormBook
                    onInputSubmit={handleSubmit}
                    isbn={isbn}
                    setIsbn={setIsbn}
                    title={title}
                    setTitle={setTitle}
                    year={year}
                    setYear={setYear}
                    genre={genre}
                    setGenre={setGenre}
                    author={author}
                    setAuthor={setAuthor}
                    publisher={publisher}
                    setPublisher={setPublisher}
                    price={price}
                    setPrice={setPrice}
                    poster={poster}
                    setPoster={setPoster}
                    desc={desc}
                    setDesc={setDesc}
                    
                    
                />
            </section>
        </section>
    );
};



export default AddBook;