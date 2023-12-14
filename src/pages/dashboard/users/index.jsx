import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Badge} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAuth } from '../../../store/auth/selector';
import api from '../../../data/api';

const DashboardUser = () => {
    const [borrows, setBorrows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useSelector(selectAuth);
    const navigate = useNavigate();

    const fetchBorrow = async ({id}) => {
        try {
            setIsLoading(true);

            const borrow = await api.getBorrowById({id});
            console.log(borrow);
            setBorrows(borrow);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(true);
        }
    };

    useEffect(() => {
        const id = currentUser?._id;
        fetchBorrow({id});
    }, [currentUser]);

    const ButtonViewBook = ({id}) => {
        
        return (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/dashboard/user/detailBorrow/${id}`)}><BsEyeFill /></button>
            </div>
        );
    };

    ButtonViewBook.propTypes = {id: PropTypes.string.isRequired};

    const columns = [
        {
            name: 'Id Pinjam',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Tanggal Pinjam',
            selector: row => row.startDate,
            sortable: true,
        },
        {
            name: 'Tanggal Kembali',
            selector: row => row.endDate,
            sortable: true,
        },
        {
            name: 'Denda',
            selector: row => row.denda,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'action',
            selector: row => row.action,
            sortable: true,
        },
    ];

    const convertDate = (date) => {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
        const day = String(dateObj.getDate()).padStart(2, '0');
        
        return `${day}-${month}-${year}`;
    };

    const Status = ({status}) => {
        const statusColors = {
            'dipinjam': 'primary',
            'dikembalikan': 'success',
            'batal': 'danger'
        };
    
        const bg = statusColors[status] || 'secondary';

        return (
            <Badge bg={bg}>{status}</Badge>
        );
    };

    Status.propTypes = {status: PropTypes.string.isRequired};

    const dataFilter = borrows.map((borrow, index) => {
        return {
            ...borrow,
            id: `LB-000${index + 1}`,
            startDate: convertDate(borrow.startDate),
            endDate: convertDate(borrow.endDate),
            status: <Status  status={borrow.status} />,
            action: <ButtonViewBook id={borrow._id} />
        };
    });

    console.log(dataFilter);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col'>
                        <div className='mt-3'>
                            <DataTable
                                title="Daftar Peminjaman Buku"
                                columns={columns}
                                data={dataFilter}
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

export default DashboardUser;