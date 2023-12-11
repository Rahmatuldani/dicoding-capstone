import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

import Zoom from 'react-medium-image-zoom';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

import api from '../../../data/api';
import SlideBar from '../SlideBar';
import '../style.css';
import { Button, Image } from 'react-bootstrap';
import AlertUtil from '../../../utils/alert';

const UsersList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const endPointUrlUsers = 'http://localhost:5000/api/users';

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
    ];
    
    const handleVerify = async (id) => {
        try {
            const result = await api.verifyAdmin({id});
            fetchUsers();
            AlertUtil('success', result.message);
        } catch (error) {
            AlertUtil('error', error);
        }
    };

    const Verified = (prop) => {
        if (prop.verified) {
            return (
                <Button disabled variant="primary"> <BsCheckCircleFill/></Button>
            );
        }else if(prop.type === 'admin' && prop.verified === false){
            return (
                <Button 
                    variant="danger" 
                    onClick={() => handleVerify(prop.id)}
                > 
                    <BsXCircleFill />
                </Button>
            );
        }else {
            return (
                <Button disabled variant="danger"> <BsXCircleFill /></Button>
            );
        }
    };
    
    const ImageKTP = (ktp) => {
        if (ktp.ktp) {
            return (
                <div className='d-flex justify-content-center'>
                    <Zoom>
                        <Image src={`${endPointUrlUsers}/${ktp.ktp}/ktp`} width='40px' height='40px' />
                    </Zoom>
                </div>
            );
        }

        return (
            <div className='d-flex justify-content-center'>
                <Zoom>
                    <Image src='../../src/assets/blank-ktp.png' width='40px' height='40px' />
                </Zoom>
            </div>
        );
    };

    const usersFilter = users.map((
        {
            _id, 
            ktp, 
            name, 
            email, 
            role, 
            verified, 
            adminVerified
        }) => ({
        ktp: <ImageKTP ktp={ktp}/>,
        name,
        email,
        role,
        verified: <Verified verified={verified} type='user'/>,
        adminVerified: <Verified verified={adminVerified} type='admin' id={_id}/>,
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