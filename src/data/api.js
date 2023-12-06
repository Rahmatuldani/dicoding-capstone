/* eslint-disable no-unused-vars */
import axios from 'axios';


const api = (() => { 
    
    const librify = axios.create({
        baseURL: 'http://20.2.89.234:5000/api',
    });

    async function register(formData) {
        console.log(formData);
        const user = await axios({
            method: 'post',
            url: 'http://20.2.89.234:5000/api/auth/register',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }});
        const result = user;
        return result;
    }
  
    async function login({ email, password }) {
        const user = await axios.post('http://20.2.89.234:5000/api/auth/login', {email, password});
        const result = user.data;
        return result;
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


