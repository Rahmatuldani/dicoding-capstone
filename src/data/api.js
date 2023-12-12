/* eslint-disable no-unused-vars */
import axios from 'axios';


const api = (() => { 
    
    const librify = axios.create({
        baseURL: 'http://localhost:5000/api',
    });

    const token = 'secretpassword';

    async function register(formData) {
        console.log(formData);
        const user = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/auth/register',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }});
        const result = user;
        return result;
    }
  
    async function login({ email, password }) {
        const user = await axios.post('http://localhost:5000/api/auth/login', {email, password});
        const result = user.data;
        return result;
    }

    async function getUsers() {
        const users = await librify.get('/users', { headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        }});
        return users.data.data.users;
    }

    async function verifyAdmin({id}) {
        console.log(id);
        const verify = await librify.get(`/users/verifyAdmin/${id}`);
        return verify;
    }

    async function createBook({
        isbn,
        title,
        year,
        genre,
        author,
        publisher,
        stock,
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
            stock,
            price,
            poster,
            desc,
        };
        const response = await librify.post('/books', 
            data, 
            { headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            }
            });

        return response;
    }
    async function updateBook({
        isbn,
        title,
        year,
        genre,
        author,
        publisher,
        stock,
        price,
        desc,
        id,
    }) {
        const data = {
            isbn,
            title,
            year,
            genre,
            author,
            publisher,
            stock,
            price,
            desc,
        };
        
        const response = await librify.put(`/books/${id}`,
            data, 
            { headers: {
                'Content-Type': 'application/json',
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

    async function createLike(data) {
        const response = await librify.post(`/books/${data.idBook}/${data.type}`, {userId: data.user});

        return await response.data;
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
        getUsers,
        verifyAdmin,
        createBook,
        updateBook,
        createLike,
        getAllBooks,
        getBooksPages,
        createBorrow,
        getAllBorrowed,
    };
})();
  
export default api;


