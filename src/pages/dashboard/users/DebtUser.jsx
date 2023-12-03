import { useParams } from 'react-router-dom';
import SlideBar from '../SlideBar';
import '../style.css';
import { 
    Badge
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const DebtUser  = () => {
    const { role } = useParams();
    const columns = [
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
            name: 'Telat',
            selector: row => row.telat,
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
            
            title: 'Cantik Itu Luka',
            dateBorrwo: '20-11-2023',
            telat:'0',
            status: <Badge bg="primary">succes</Badge>
        },
        {
            
            title: 'Atomic Habits',
            dateBorrwo: '20-11-2023',
            telat:'1',
            status: <Badge bg="warning">warning</Badge>
        },
        {
            
            title: 'Merawat Luka Batin ',
            dateBorrwo: '20-11-2023',
            telat:'10',
            status: <Badge bg="danger">danger</Badge>
        },
    ];
    const [dataFilter, setDataFilter] = useState(datas);
    const handlerChange = (event) => {
        const filter =  datas.filter((book) => {
            return book.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setDataFilter(filter);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <SlideBar isActive='debt' role={role}/>
                <div className='col'>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-end mb-1'>
                            <input type="search" className="form-control w-25 d-lg-inline" onChange={handlerChange} placeholder="Search" />
                        </div>
                        <DataTable
                            title="Daftar Denda Buku"
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

export default DebtUser;