/* eslint-disable no-unused-vars */
import Books from './books.json';

const api = (() => {  
    async function register({ name, email, password }) {
        return null;
    }
  
    async function login({ email, password }) {
        const result = {
            id: 1,
            name: 'Testing',
            email: email,
            password: password
        };
        return await result;
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
        const result = Books.books;
        return await result;
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


