import FormBook from './formBook';
import { useDispatch } from 'react-redux';
import { insertBooksStart } from '../../store/books/action';
import useInput from '../../hooks/useInput';

const AddBook = () => {
    const dispatch = useDispatch();
    const [isbn, setIsbn] = useInput('');
    const [title, setTitle] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!validationForm()) {
            return;
        }
        dispatch(insertBooksStart({isbn, title}));
    }

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
        <section className='m-4'>
            <h1 className='text-center mb-4'>Add Book</h1>
            <section className='d-flex flex-wrap justify-content-center gap-4'>
                <FormBook
                    onInputSubmit={handleSubmit}
                    isbn={isbn}
                    setIsbn={setIsbn}
                    title={title}
                    setTitle={setTitle}
                />
            </section>
        </section>
    );
};



export default AddBook;
