/* eslint-disable no-unused-vars */
import axios from 'axios';


const api = (() => { 
    
    const BASE_URL = 'http://20.2.89.234:5000/api';
    const librify = axios.create({
        baseURL: 'http://20.2.89.234:5000/api',
        authorization: { 'Bearer': 'secretpassword' }
    });

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

    async function createBook({
        isbn,
        title,
        year,
        genre,
        author,
        publisher,
        price,
        poster,
        desc,
    }) {
        const result = {
            isbn,
            title,
            year,
            genre,
            author,
            publisher,
            price,
            poster,
            desc,
        };
        return await result;
    }
  
    async function getAllBooks() {
        //const response = await axios.get(`${BASE_URL}/books`);
        const response = await librify.get('/books');
        return response.data.data.books;
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


