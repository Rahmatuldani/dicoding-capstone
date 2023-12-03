import { useParams } from 'react-router-dom';
import SlideBar from '../SlideBar';
import '../style.css';
import { Badge, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import DataTable from 'react-data-table-component';


const BorrowUser  = () => {
    const { role } = useParams();
    const columns = [
        {
            name: 'Id User',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Buku',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Tanggal Pinjam',
            selector: row => row.dateBorrwo,
            sortable: true,
        },
        {
            name: 'Tanggal Kembali',
            selector: row => row.dateBack,
            sortable: true,
        },
        {
            name: 'status',
            selector: row => row.status,
            sortable: true,
        },
    ];
    const datas = [
        {
            id: 'LB-00001',
            title: 'Cantik Itu Luka',
            dateBorrwo: '20-11-2023',
            dateBack:'27-11-2023',
            status: <Badge bg="primary">succes</Badge>
        },
        {
            id: 'LB-00002',
            title: 'Atomic Habits',
            dateBorrwo: '20-11-2023',
            dateBack:'27-11-2023',
            status: <Badge bg="warning">warning</Badge>
        },
        {
            id: 'LB-00003',
            title: 'Merawat Luka Batin ',
            dateBorrwo: '20-11-2023',
            dateBack:'27-11-2023',
            status: <Badge bg="danger">danger</Badge>
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
        <div className="container-fluid">
            <div className="row">
                <SlideBar isActive='borrow' role={role}/>
                <div className='col'>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-end mb-1'>
                            <input type="search" className="form-control w-25 d-lg-inline" onChange={handlerChange} placeholder="Search" />
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
    );
};

export default BorrowUser;