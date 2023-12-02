import { useParams } from 'react-router-dom';
import SlideBar from '../SlideBar';
import '../style.css';
import { Badge, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const BorrowUser  = () => {
    const { role } = useParams();
    return (
        <div className="container-fluid">
            <div className="row">
                <SlideBar isActive='borrow' role={role}/>
                <div className='col'>
                    <h3 className='pt-3'>Daftar Peminjaman Buku </h3>
                    <div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Tanggal Pinjam</th>
                                    <th scope="col">Tanggal Kembali</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>LB-00001</td>
                                    <td>12-11-2023</td>
                                    <td>17-11-2023</td>
                                    <td><Badge bg="danger">Danger</Badge></td>
                                    <td>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            title="Action"
                                            id="bg-vertical-dropdown-1"
                                        >
                                            <Dropdown.Item eventKey="1">Kembalikan</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Perpanjang</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>LB-00002</td>
                                    <td>13-11-2023</td>
                                    <td>18-11-2023</td>
                                    <td><Badge bg="warning">Warning</Badge></td>
                                    <td>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            title="Action"
                                            id="bg-vertical-dropdown-1"
                                        >
                                            <Dropdown.Item eventKey="1">Kembalikan</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Perpanjang</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >LB-00003</td>
                                    <td>14-11-2023</td>
                                    <td>19-11-2023</td>
                                    <td><Badge bg="primary">Primary</Badge></td>
                                    <td>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            title="Action"
                                            id="bg-vertical-dropdown-1"
                                        >
                                            <Dropdown.Item eventKey="1">Kembalikan</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Perpanjang</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowUser;