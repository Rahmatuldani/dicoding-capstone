
import { BsExclamationTriangleFill, BsFillCalendar2PlusFill, BsFillHeartFill } from 'react-icons/bs';
import './style.css';
import { Badge, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='col-auto min-vh-100 bg-light p-0'>
                    <div className="list-group list-group-flush">
                        <a className="list-group-item list-group-item-action list-group-item-light p-3 text-primary active"  href="#!">
                            <BsFillCalendar2PlusFill /> <span className='md-1 d-none d-lg-inline'>Peminjaman</span>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3 text-primary" href="#!">
                            <BsExclamationTriangleFill /> <span className='md-1 d-none d-lg-inline'>Denda</span>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3 text-primary" href="#!">
                            <BsFillHeartFill /> <span className='md-1 d-none d-lg-inline'>LIke</span>
                        </a>
                    </div>
                </div>
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

export default Dashboard;