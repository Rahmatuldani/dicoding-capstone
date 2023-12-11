import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import SlideBar from '../SlideBar';
import { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';

const BorrowList = () => {
    const navigate = useNavigate();
    const ButtonViewBook = (id) => {
        
        return (
            <div className='d-flex justify-content-center'>
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
            name: 'action',
            selector: row => row.action,
            sortable: true,
        },
    ];
    const datas = [
        {
            id: 'LB-00001',
            dateBack:'27-11-2023',
            denda: 20000,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
        {
            id: 'LB-00002',
            dateBack:'27-11-2023',
            denda: 20000,
            action: <ButtonViewBook id={'657059e93bcc3f13fdf5f0c6'} />
        },
        {
            id: 'LB-00003',
            dateBack:'27-11-2023',
            denda: 20000,
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
        </div>
    );
};

export default BorrowList;