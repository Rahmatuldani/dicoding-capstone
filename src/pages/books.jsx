import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../store/books/selector';
import { fetchBooksStart, insertBooksStart } from '../store/books/action';
import { Loading } from '../components';
import useInput from '../hooks/useInput';

const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();
    const [BookName, setBookName] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(insertBooksStart({BookName}));
    }

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    return (
        <>  
            <div>
            Input Buku
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='nama buku' value={BookName} onChange={setBookName}/>
                    <button type='submit'>Simpan</button>
                </form>
            </div>
            <div>
            Books Page
                {!books ? <Loading/> : 
                    books.map((book, index) => (
                        <div key={index}>{book.title}</div>
                    ))
                }
            </div>
        </>
    );
};

export default Books;