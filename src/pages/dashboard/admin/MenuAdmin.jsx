import PropTypes from 'prop-types';
import { BsFillCalendar2PlusFill, } from 'react-icons/bs';

const MenuUser = ({
    onClickBookList,
    onClickBorrowList,
    onClickAddBook,
    isActive} ) => {
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            <div className="list-group list-group-flush">
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'books' ? 'active' : ''}`}
                    onClick={onClickBookList}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillCalendar2PlusFill /> <span className='lg-1 d-none d-lg-inline'>Buku</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'addBook' ? 'active' : ''}`}
                    onClick={onClickAddBook}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillCalendar2PlusFill /> <span className='lg-1 d-none d-lg-inline'>Tambah Buku</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'borrow' ? 'active' : ''}`}
                    onClick={onClickBorrowList}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillCalendar2PlusFill /> <span className='lg-1 d-none d-lg-inline'>Peminjam</span>
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
};

export default MenuUser;