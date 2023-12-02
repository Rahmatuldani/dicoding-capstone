import { useNavigate, useParams } from 'react-router-dom';
import SlideBar from '../SlideBar';
import DataTable from 'react-data-table-component';
import { selectBooks } from '../../../store/books/selector';
import { useState } from 'react';
import '../style.css';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BooksList = () => {
    const { role } = useParams();
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
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];
    
    const AvailableBadge = () => (
        <Badge bg="primary">tersedia</Badge>
    );
    const ButtonViewBook = (id) => {
        console.log(id);
        return (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}>View</button>
            </div>
        );
    };
    const booksFilter = books.map(({_id, title, genre, author, year}) => ({
        title,
        genre,
        author,
        year,
        status: <AvailableBadge />,
        action: <ButtonViewBook id={_id} />
    }));

    const [dataFilter, setDataFilter] = useState(booksFilter);
    const handlerChange = (event) => {
        const filter =  booksFilter.filter((book) => {
            return book.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setDataFilter(filter);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='books' role={role}/>
                    <div className='col'>
                        <div className='mt-3'>
                            <div className='d-flex justify-content-end mb-1'>
                                <input type="search" className="form-control w-25 d-lg-inline" onChange={handlerChange} placeholder="Search" />
                            </div>
                            <DataTable
                                title="Daftar Buku"
                                columns={columns}
                                data={dataFilter}
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