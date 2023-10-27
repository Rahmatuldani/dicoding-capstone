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
  
    async function getAllBooks() {
        const result = Books.books;
        return await result;
    }
  
    async function getAllBorrowed({ id }) {
        const result = [
            {
                isbn: '1111'
            },
            {
                isbn: '222'
            },
        ];

        return await result;
    }
  
    return {
        register,
        login,
        getAllBooks,
        getAllBorrowed
    };
})();
  
export default api;
  