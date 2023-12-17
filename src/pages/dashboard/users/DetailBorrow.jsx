import { useNavigate, useParams } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useEffect} from 'react';
import { BsEyeFill} from 'react-icons/bs';
import { selectBorrow } from '../../../store/borrow/selector';
import { fetchBorrowStart } from '../../../store/borrow/action';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const DetailBorrow = () => {
    const idBorrow = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { borrow, isLoading } = useSelector(selectBorrow);

    const buttonPropTypes = {
        id: PropTypes.string.isRequired,
    };

    useEffect(() => {
        dispatch(fetchBorrowStart());
    }, [dispatch]);

    const columns = [
        {
            name: 'Id Pinjam',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'ISBN',
            selector: row => row.isbn,
            sortable: true,
        },
        {
            name: 'Buku',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'action',
            selector: row => row.action,
            
        },
    ];

    const ViewBookButton = ({ id }) => (
        <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id}`)}><BsEyeFill /></button>
    );

    ViewBookButton.propTypes = buttonPropTypes;
    
    const GroupButtonAction = (borrow) => {
        return (
            <div className='d-flex justify-content-center'>
                <div className='btn-group'>
                    <ViewBookButton id={borrow.book._id} />
                </div>
            </div>
        );
    };

    GroupButtonAction.propTypes = {
        borrow: PropTypes.shape({
            status: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
        }).isRequired,
    };

    const filterBorrow = borrow.filter((borrowItem) => borrowItem._id === idBorrow.id);
    let dataBooks = [];
    if (filterBorrow.length > 0) {
        const books = filterBorrow[0].books;
        
        dataBooks = books.map((itemBook) => ({
            id: 'LB-0001',
            isbn: itemBook.book.isbn,
            title: itemBook.book.title,
            action: <GroupButtonAction {...itemBook} />
        }));
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col'>
                        <div className='mt-3'>
                            <DataTable
                                title="Daftar Peminjaman Buku"
                                columns={columns}
                                data={dataBooks}
                                progressPending={isLoading}
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

export default DetailBorrow;