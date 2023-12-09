import { useNavigate, useParams } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import SlideBar from '../SlideBar';
import { Badge} from 'react-bootstrap';
import { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';

const BorrowList = () => {
    const navigate = useNavigate();
    const ButtonViewBook = (id) => {
        
        return (
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsEyeFill /></button>
                <button className='btn btn-primary mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsEyeFill /></button>
            </div>
        );
    };
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
            selector: row => row.dateBorrow,
            sortable: true,
        },
        {
            name: 'Tanggal Kembali',
            selector: row => row.dateBack,
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
    const datas = [
        {
            id: 'LB-00001',
            name: 'Rizky',
            dateBorrow:'09-12-2023',
            dateBack:'16-12-2023',
            denda: 0,
            status: <Badge bg="primary">Dibuat</Badge>,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
        {
            id: 'LB-00002',
            name: 'Ahmad',
            dateBorrow:'08-12-2023',
            dateBack:'16-12-2023',
            denda: 0,
            status: <Badge bg="success">Dipinjam</Badge>,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
        {
            id: 'LB-00003',
            name: 'Agus',
            dateBorrow:'20-11-2023',
            dateBack:'27-11-2023',
            denda: 20000,
            status: <Badge bg="danger">Denda</Badge>,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
        {
            id: 'LB-00003',
            name: 'Dini',
            dateBorrow:'20-11-2023',
            dateBack:'27-11-2023',
            denda: 0,
            status: <Badge bg="warning">Batal</Badge>,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
    ];
    const [dataFilter, setDataFilter] = useState(datas);
    const handlerChange = (event) => {
        const filter =  datas.filter((data) => {
            return data.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setDataFilter(filter);
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='borrow'/>
                    <div className='col'>
                        <div className='mt-3'>
                            <div className='d-flex justify-content-end mb-1'>
                                <input type="search" className="form-control d-lg-inline" placeholder="Search" />
                            </div>
                            <DataTable
                                title="Daftar Peminjaman Buku"
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

export default BorrowList;