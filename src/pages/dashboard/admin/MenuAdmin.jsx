import PropTypes from 'prop-types';
import { BsBookFill, BsFillPlusSquareFill, BsLayersFill, BsPeopleFill, } from 'react-icons/bs';

const MenuUser = ({
    onClickBookList,
    onClickBorrowList,
    onClickAddBook,
    onClickUsersList,
    isActive} ) => {
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            <div className="list-group list-group-flush">
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'books' ? 'active' : ''}`}
                    onClick={onClickBookList}
                    style={{cursor: 'pointer'}}
                >
                    <BsBookFill /> <span className='xl-1 d-none d-xl-inline'>Buku</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'addBook' ? 'active' : ''}`}
                    onClick={onClickAddBook}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillPlusSquareFill /> <span className='xl-1 d-none d-xl-inline'>Tambah Buku</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'borrow' ? 'active' : ''}`}
                    onClick={onClickBorrowList}
                    style={{cursor: 'pointer'}}
                >
                    <BsLayersFill /> <span className='xl-1 d-none d-xl-inline'>Peminjam</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'users' ? 'active' : ''}`}
                    onClick={onClickUsersList}
                    style={{cursor: 'pointer'}}
                >
                    <BsPeopleFill /> <span className='xl-1 d-none d-xl-inline'>Anggota</span>
                </a>
            </div>
        </div>
    );
};

MenuUser.propTypes = {
    isActive: PropTypes.string.isRequired,
    onClickBookList: PropTypes.func.isRequired,
    onClickBorrowList: PropTypes.func.isRequired,  
    onClickAddBook: PropTypes.func.isRequired,
    onClickUsersList: PropTypes.func.isRequired,  

};

export default MenuUser;