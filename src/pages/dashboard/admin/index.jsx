import { useNavigate } from 'react-router-dom';
import SlideBar from '../SlideBar';
import DataTable from 'react-data-table-component';
import { selectBooks } from '../../../store/books/selector';
import { useState } from 'react';
import '../style.css';
import { useSelector } from 'react-redux';
import { BsEyeFill, BsPencilSquare } from 'react-icons/bs';

const BooksList = () => {
    const { books } = useSelector(selectBooks);
    const navigate = useNavigate();
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Genre',
            selector: row => row.genre,
            sortable: true,
        },
        {
            name: 'Penulis',
            selector: row => row.author,
            sortable: true,
        },
        {
            name: 'Tahun',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Stok',
            selector: row => row.stock,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];
    
    const ButtonViewBook = (id) => {
        return (
            <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsEyeFill /></button>
        );
    };
    
    const ButtonEditBook = (id) => {
        return (
            <button className='btn btn-warning mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsPencilSquare /></button>
        );
    };

    const GroupButtonAction = (id) => {
        return (
            <div className='d-flex justify-content-center'>
                <div className='btn-group'>
                    <ButtonViewBook id={id.id} />
                    <ButtonEditBook id={id.id} />
                </div>
            </div>
        );
    };

    const booksFilter = books.map(({_id, title, genre, author, year, stock}) => ({
        title,
        genre,
        author,
        year,
        stock,
        action: <GroupButtonAction id={_id} />
    }));

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='books'/>
                    <div className='col'>
                        <div className='mt-3'>
                            <DataTable
                                title="Daftar Buku"
                                columns={columns}
                                data={booksFilter}
                                fixedHeader
                                pagination
                                highlightOnHover
                                responsive={true}
                                pointerOnHover
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksList;