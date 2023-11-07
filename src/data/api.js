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

    async function createBorrow({ id, isbn, title, name, phone, startDate, endDate }) {
        const result = {
            id: id, 
            book: {
                isbn: isbn,
                title: title 
            },
            member: {
                id: id,
                name: name,
                phone: phone
            },
            startDate: startDate,
            endDate: endDate
        };
        
        return await result;
    }

    async function getAllBorrowed({ id, isbn, title, name, phone, startDate, endDate }) {
        const result = [
            {
                id: id,
                book: {
                    isbn: '9781593279509',
                    title: 'Eloquent JavaScript, Third Edition'
                },
                member: {
                    id: id,
                    name: 'Nama',
                    phone: '123-456-678'
                },
                startDate: '07-11-2023',
                endDate: '31-12-2023'
            }
        ];
        
        return await result;
    }
  
    return {
        register,
        login,
        getAllBooks,
        createBorrow,
        getAllBorrowed,
        createBook
    };
})();
  
export default api;


