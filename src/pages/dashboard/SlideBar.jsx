import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MenuUser from './users/MenuUser';
import MenuAdmin from './admin/MenuAdmin';

const SlideBar = ({ isActive, role }) => {
    const navigate = useNavigate();
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            {role === 'user' ?
                <MenuUser 
                    onClickBorrow={() => navigate('/dashboard/user/user')}
                    onClickDebt={() => navigate('/dashboard/user/debt/user')}
                    onClickLike={() => navigate('/dashboard/user/like/user')}
                    isActive={isActive}
                    role={role}
                />
                :
                <MenuAdmin
                    onClickBookList={() => navigate('/dashboard/admin/admin')}
                    onClickAddBook={() => navigate('/dashboard/admin/addbook/admin')}
                    onClickBorrowList={() => navigate('/dashboard/admin/borrow/admin')}
                    isActive={isActive}
                    role={role}
                />
            }
        </div>
    );
};

SlideBar.propTypes = {
    isActive: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export default SlideBar;