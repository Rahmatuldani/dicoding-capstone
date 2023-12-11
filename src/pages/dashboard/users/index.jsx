import { Navigate } from 'react-router-dom';
import '../style.css';
// import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/auth/selector';
import { Table } from 'react-bootstrap';

const DashboardUser  = () => {
    const { currentUser } = useSelector(selectAuth);
/*     const currentUser = {
        _id: '657038669e225d6388109061',
        name: 'Samuel Eto ',
        role: 'user',
        email: 'user@gmail.com',
        avatar: null,
        verified: false,
        adminVerified: false,
        verificationToken: '87ec0a35-1483-441d-985b-598cc06fc373'
    }; */
    return (
        <>
            {
                currentUser.role === 'user' ? 
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col'>
                                <div className='mt-3'>
                                    <h3>Dashboard User</h3>
                                    <Table responsive striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Nama</th>
                                                <th>Email</th>
                                                <th>KTP</th>
                                                <th>Verifikasi</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{currentUser.name}</td>
                                                <td>{currentUser.email}</td>
                                                <td>gambar ktp</td>
                                                <td>{currentUser.verified ? 'Terverifikasi' : 'Belum verifikasi'}</td>
                                                <td>{currentUser.role}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Navigate to={'/'} replace/>
            }
        </>

    );
};

export default DashboardUser;