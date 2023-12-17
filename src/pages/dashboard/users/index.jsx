import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Badge, Button, Form, Modal} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BsEyeFill, BsPencilSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAuth } from '../../../store/auth/selector';
import api from '../../../data/api';
import AlertUtil from '../../../utils/alert';

const DashboardUser = () => {
    const [borrows, setBorrows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useSelector(selectAuth);
    const navigate = useNavigate();

    const buttonPropTypes = {
        id: PropTypes.string.isRequired,
    };

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

    const ViewBorrowButton = ({id}) => {
        
        return (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/dashboard/user/detailBorrow/${id}`)}><BsEyeFill /></button>
            </div>
        );
    };

    ViewBorrowButton.propTypes = buttonPropTypes;

    const ChangeStatusButton = ({ id }) => {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
            <>
                <button className='btn btn-warning mr-3' onClick={handleShow}><BsPencilSquare /></button>
                <ChangeStatusModal show={show} handleClose={handleClose} id={id} />
            </>
        );
    };

    ChangeStatusButton.propTypes = buttonPropTypes;

    const handleChangeStatus = async (id, status) => {
        const data = {
            id,
            status
        };

        try {
            const result = await api.changeStatus(data);

            fetchBorrow({id});
            AlertUtil('success', result.message);
        } catch (error) {
            AlertUtil('error', error);
        }

    };

    const ChangeStatusModal = ({show, handleClose, id}) => {
        const [status, setStatus] = useState('dibuat');

        const handleSelectStatus = (event) => {
            setStatus(event.target.value);
        };


        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ubah Status Peminjaman</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select aria-label="Default select example" value={status} onChange={handleSelectStatus}>
                        <option>Jenis Status</option>
                        <option value="dipinjam">Dipinjam</option>
                        <option value="batal">Batal</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {handleClose(); handleChangeStatus(id, status);}}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    ChangeStatusModal.propTypes = {
        show: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
    };

    const GroupButtonAction = (borrow) => (
        <div className='d-flex justify-content-center'>
            <div className='btn-group'>
                { (borrow.status === 'dibuat' ) && <ChangeStatusButton id={borrow._id} /> }
                <ViewBorrowButton id={borrow._id} />
            </div>
        </div>
    );

    GroupButtonAction.propTypes = {
        borrow: PropTypes.shape({
            status: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
        }).isRequired,
    };

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
            'denda': 'warning',
            'batal': 'danger'
        };
        
        const bg = statusColors[status] || 'secondary';
        
        return (
            <Badge bg={bg}>{status}</Badge>
        );
    };
        
    Status.propTypes = {status: PropTypes.string.isRequired};

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
        
    const dataFilter = borrows.map((borrow) => {
        return {
            ...borrow,
            id: `LB-${borrow._id.substring(8, 4)}`,
            startDate: convertDate(borrow.startDate),
            endDate: convertDate(borrow.endDate),
            status: <Status  status={borrow.status} />,
            action: <GroupButtonAction {...borrow} />
        };
    });

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