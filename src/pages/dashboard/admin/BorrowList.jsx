import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import SlideBar from '../SlideBar';
import { Badge, Dropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { selectBorrow } from '../../../store/borrow/selector';
import { fetchBorrowStart } from '../../../store/borrow/action';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

const BorrowList = () => {
    const { borrow, isLoading } = useSelector(selectBorrow);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(borrow);
    useEffect(() => {
        dispatch(fetchBorrowStart());
    }, [dispatch]);

    const ButtonViewBook = (id) => {
        
        return (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsEyeFill /></button>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsEyeFill /></button>
            </div>
        );
    };

    const Status = ({status}) => {
        let bg = 'primary';

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
            name: 'Nama',
            selector: row => row.name,
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
            name: 'action',
            selector: row => row.action,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
    ];

    const ActionButton = () => (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                +
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dropdown link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    const dataBorrow = borrow.map((item) => ({
        ...item,
        id: `LB-${nanoid(5)}`,
        name: item.user.name,
        status: <Status  status={item.status} />,
        action: <ActionButton />
        
    }));



    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='borrow'/>
                    <div className='col'>
                        <div className='mt-3'>
                            <ActionButton />
                            <DataTable
                                title="Daftar Peminjaman Buku"
                                columns={columns}
                                data={dataBorrow}
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

export default BorrowList;