import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuAdmin from './admin/MenuAdmin';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selector';

const SlideBar = ({ isActive, role }) => {
    const navigate = useNavigate();
    const { currentUser } = useSelector(selectAuth);
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            {currentUser.role === 'admin' ?
                <MenuAdmin
                    onClickBookList={() => navigate('/dashboard/admin/admin')}
                    onClickAddBook={() => navigate('/dashboard/admin/addbook/admin')}
                    onClickBorrowList={() => navigate('/dashboard/admin/borrow/admin')}
                    isActive={isActive}
                    role={role}
                />
                :
                <Navigate to={'/'} replace/>
            }
        </div>
    );
};

SlideBar.propTypes = {
    isActive: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export default SlideBar;