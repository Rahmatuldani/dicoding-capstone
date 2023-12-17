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

    async function getUsers() {
        const users = await librify.get('/users', { headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        }});
        return users.data.data.users;
    }

    async function verifyAdmin({id}) {
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

    async function createBorrow(data) {
        const requestBody = {
            userId: data.user,
            books: data.books.map(book => ({
                book: book.idBook,
                quantity: book.quantity,
            })),
        };
    
        const headers = {
            'Authorization': `Bearer ${token}`
        };
    
        const response = await librify.post('/borrows', requestBody, { headers });
    
        return response.data;
    }

<<<<<<< HEAD
    async function getAllBorrowed(userId) {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
    
        const response = await librify.get(`/borrows/user/${userId}`, { headers });
    
        return response.data.data;
    }     
=======
    async function getAllBorrowed() {
        const result = await librify.get('/borrows',
            { headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }});
        return result.data.data;
    }

    async function getBorrowById({id}) {
        const response = await librify.get(`/borrows/${id}`);
        return response.data.data;
    }

    async function changeStatus(data) {
        const response = await librify.post(`/borrows/${data.id}/changeStatus`, 
            {
                status: data.status, 
                denda: data?.penalty || 0,
            });

        return await response.data;
    }
>>>>>>> 9b627430b508a5ec2ac3701bc57b0cd5c4961d4a

    return {
        register,
        login,
        forgotPassword,
        changePassword,
        getUsers,
        verifyAdmin,
        createBook,
        updateBook,
        createLike,
        getAllBooks,
        getBooksPages,
        createBorrow,
        getAllBorrowed,
        getBorrowById,
        changeStatus,
    };
})();
  
export default api;