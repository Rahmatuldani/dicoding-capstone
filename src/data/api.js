/* eslint-disable no-unused-vars */

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
        const result = librify.get('/books');
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

    async function getAllBorrowed(formData) {
        const result = [
            {
                bookTitle: formData.bookTitle,
                bookAuthor: formData.bookAuthor,
                startDate: formData.startDate,
                endDate: formData.endDate
            }
        ];
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


