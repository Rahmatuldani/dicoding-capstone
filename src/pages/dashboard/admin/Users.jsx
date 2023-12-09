import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

import Zoom from 'react-medium-image-zoom';
import { BsCheckCircleFill, BsPencilSquare, BsSearch, BsXCircleFill } from 'react-icons/bs';

import api from '../../../data/api';
import SlideBar from '../SlideBar';
import '../style.css';
import { Button, Image } from 'react-bootstrap';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            setIsLoading(true);

            const users = await api.getUsers();

            setUsers(users);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(true);
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);
    console.log(users);
    const columns = [
        {
            name: 'KTP',
            selector: row => row.ktp,
            sortable: true,
        },
        {
            name: 'Nama',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
        {
            name: 'Verifikasi',
            selector: row => row.verified,
            sortable: true,
        },
        {
            name: 'Verifikasi Admin',
            selector: row => row.adminVerified,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];
    
    
    const ButtonEditBook = (id) => {
        return (
            <button className='btn btn-warning mr-3' onClick={() => navigate(`/books/${id.id}`)}><BsPencilSquare /></button>
        );
    };

    const Verified = (prop) => {
        console.log(prop.verified);
        if (prop.verified) {
            return (
                <Button disabled variant="primary"> <BsCheckCircleFill/></Button>
            );
        }else {
            return (
                <Button disabled variant="danger"> <BsXCircleFill /></Button>
            );
        }
    };

    const ImageKTP = () => {
        return (
            <div className='d-flex justify-content-center'>
                <Zoom>
                    <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png' width='40px' height='40px' />
                </Zoom>
            </div>
        );
    };

    const GroupButtonAction = (id) => {
        return (
            <div className='d-flex justify-content-center'>
                <div className='btn-group'>
                    <ButtonEditBook id={id.id} />
                </div>
            </div>
        );
    };

    const usersFilter = users.map(({_id, name, email, role, verified, adminVerified}) => ({
        ktp: <ImageKTP />,
        name,
        email,
        role,
        verified: <Verified verified={verified} />,
        adminVerified: <Verified verified={adminVerified} />,
        action: <GroupButtonAction id={_id} />
    }));

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <SlideBar isActive='users'/>
                    <div className='col'>
                        <div className='mt-3'>
                            <div className='d-flex justify-content-end mb-1'>
                                <input type="search" className="form-control d-lg-inline" placeholder="Search" />
                            </div>
                            <DataTable
                                title="Daftar Anggota"
                                columns={columns}
                                data={usersFilter}
                                fixedHeader
                                highlightOnHover
                                responsive={true}
                                pointerOnHover
                                progressPending={isLoading}
                                pagination
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;