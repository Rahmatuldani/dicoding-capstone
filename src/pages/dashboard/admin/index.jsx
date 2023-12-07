import { useNavigate } from 'react-router-dom';
import SlideBar from '../SlideBar';
import DataTable from 'react-data-table-component';
import { selectBooks } from '../../../store/books/selector';
import { useEffect, useState } from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsEyeFill, BsPencilSquare } from 'react-icons/bs';
import { fetchBooksPageStart, fetchBooksStart } from '../../../store/books/action';

const BooksList = () => {
    const { books, pages, isLoading } = useSelector(selectBooks);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentItems = books;
    const totalPages = pages * 10;

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

    const booksFilter = currentItems.map(({_id, title, genre, author, year, stock}) => ({
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