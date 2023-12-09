import PropTypes from 'prop-types';
import { BsExclamationTriangleFill, BsFillCalendar2PlusFill, BsFillHeartFill } from 'react-icons/bs';

const MenuUser = ({
    onClickBorrow, 
    onClickDebt, 
    onClickLike, 
    isActive} ) => {
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            <div className="list-group list-group-flush">
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'borrow' ? 'active' : ''}`}
                    onClick={onClickBorrow}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillCalendar2PlusFill /> <span className='md-1 d-none d-lg-inline'>Peminjaman</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'debt' ? 'active' : ''}`}
                    onClick={onClickDebt}
                    style={{cursor: 'pointer'}}
                >
                    <BsExclamationTriangleFill /> <span className='md-1 d-none d-lg-inline'>Denda</span>
                </a>
                <a
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'like' ? 'active' : ''}`}
                    onClick={onClickLike}
                    style={{cursor: 'pointer'}}
                >
                    <BsFillHeartFill /> <span className='md-1 d-none d-lg-inline'>Like</span>
                </a>
            </div>
        </div>
    );
};

MenuUser.propTypes = {
    isActive: PropTypes.string.isRequired,
    onClickBorrow: PropTypes.func.isRequired,
    onClickDebt: PropTypes.func.isRequired,
    onClickLike: PropTypes.func.isRequired
};

export default MenuUser;