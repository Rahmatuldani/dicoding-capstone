import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../store/books/selector';
import { fetchBooksStart, insertBooksStart } from '../store/books/action';
import { Loading } from '../components';
import useInput from '../hooks/useInput';
import FormBook from '../components/formBook';

const Books = () => {
    const { books } = useSelector(selectBooks);
    const dispatch = useDispatch();
    const [isbn, setIsbn] = useInput('');
    const [title, setTitle] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(insertBooksStart({isbn, title}));
    }

    React.useEffect(() => {
        dispatch(fetchBooksStart());
    }, [dispatch]);
    
    return (
        <>  
            <FormBook 
                onInputSubmit={handleSubmit}
                isbn={isbn}
                setIsbn={setIsbn}
                title={title} 
                setTitle={setTitle}
            />
            
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