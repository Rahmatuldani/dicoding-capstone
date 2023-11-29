/* eslint-disable no-unused-vars */
import Books from './books.json';
import axios from 'axios';


const api = (() => { 
    
    const librify = axios.create({
        baseURL: 'https://librify-api.up.railway.app/api',
        headers: { 'Content-Type': 'application/json' },
    });

    async function register({ name, email, password }) {
        return null;
    }
  
    async function login({ email, password }) {
        const user = await axios.post('http://localhost:5001/api/auth/login', {email, password});
        const result = user.data;
        return result;
    }

    async function createBook({ isbn, title }) {
        const result = {
            isbn: isbn,
            title: title,
            //author: author,
            //description: description
        };
        return await result;
    }
  
    async function getAllBooks() {
        //const result = librify.get('/books');
        const result = Books.books;
        return await result;
    }

    async function getBookById(id) {

    }

    async function createBorrow({bookTitle, bookAuthor, startDate, endDate}) {
        const result = {
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
            startDate: startDate,
            endDate: endDate
        };
        return await result;
    }

    async function getAllBorrowed() {
        const result = [];
        return await result;
    }

    return {
        register,
        login,
        createBook,
        getAllBooks,
        createBorrow,
        getAllBorrowed,
    };
})();
  
export default api;


