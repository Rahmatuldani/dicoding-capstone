/* eslint-disable no-unused-vars */
import axios from 'axios';


const api = (() => { 
    
    const librify = axios.create({
        baseURL: 'http://localhost:3000/api',
    });

    async function register(formData) {
        console.log(formData);
        const user = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/auth/register',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }});
        const result = user;
        return result;
    }
  
    async function login({ email, password }) {
        const user = await axios.post('http://localhost:3000/api/auth/login', {email, password});
        const result = user.data;
        return result;
    }

    async function forgotPassword({ email }) {
        const user = await axios.put('http://localhost:3000/api/auth/forgotpassword', { email });
        const result = user.data;
        return result;
    }

    async function changePassword({ oldPassword, newPassword , token}) {
        const data = {
            // oldPassword,
            password: newPassword,
        };

        const response = await axios.put('http://localhost:3000/api/auth/changePassword/'+token, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        return response;
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
        const data = {
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
        const token = 'secretpassword';
        const response = await librify.post('/books', 
            data, 
            { headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
            });

        return response;
    }

    async function getBooksPages() {
        const response = await librify.get('/books/pages');

        return response.data.data.pages;
    }

    async function getAllBooks({page}) {
        const response = await librify.get(`/books?page=${page}`);

        return response.data.data.books;
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
        forgotPassword,
        changePassword,
        createBook,
        getAllBooks,
        getBooksPages,
        createBorrow,
        getAllBorrowed,
    };
})();
  
export default api;


