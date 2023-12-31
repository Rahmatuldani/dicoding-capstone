import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DataTable from 'react-data-table-component';

import { selectBooks } from '../../../store/books/selector';
import { fetchBooksPageStart, fetchBooksStart } from '../../../store/books/action';

import SlideBar from '../SlideBar';
import { BsEyeFill, BsPencilSquare } from 'react-icons/bs';

import '../style.css';

const BooksList = () => {
    const { books, pages, isLoading } = useSelector(selectBooks);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPages = pages * 10;

    const buttonPropTypes = {
        id: PropTypes.string.isRequired,
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const page = currentPage;
        dispatch(fetchBooksStart({page}));
        dispatch(fetchBooksPageStart());
    }, [currentPage, dispatch]);

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
    
    const ViewBookButton = ({ id }) => (
        <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id}`)}><BsEyeFill /></button>
    );

    ViewBookButton.propTypes = buttonPropTypes;
    
    const EditBookButton = ({ id }) => (
        <button className='btn btn-warning mr-3' onClick={() => navigate(`/dashboard/admin/editbook/${id}`)}><BsPencilSquare /></button>
    );

    EditBookButton.propTypes = buttonPropTypes;

    const GroupButtonAction = (book) => (
        <div className='d-flex justify-content-center'>
            <div className='btn-group'>
                <ViewBookButton id={book._id} />
                <EditBookButton id={book._id} />
            </div>
        </div>
    );

    const booksFilter = books.filter((book) => book.stock > 0);
    const dataBook = booksFilter.map((book) => ({
        ...book,
        action: <GroupButtonAction {...book} />
    }));

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='books'/>
                    <div className='col'>
                        <div className='mt-3'>
                            <div className='d-flex justify-content-end mb-1'>
                                <input type="search" className="form-control d-lg-inline" placeholder="Search" />
                            </div>
                            <DataTable
                                title="Daftar Buku"
                                columns={columns}
                                data={dataBook}
                                fixedHeader
                                highlightOnHover
                                responsive={true}
                                pointerOnHover
                                progressPending={isLoading}
                                pagination
                                paginationServer
                                paginationTotalRows={totalPages}
                                onChangePage={handlePageChange}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksList;