import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuAdmin from './admin/MenuAdmin';
/* import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selector'; */

const SlideBar = ({ isActive, role }) => {
    
    const navigate = useNavigate();
    //const { currentUser } = useSelector(selectAuth);
    const currentUser = {
        _id: '657038669e225d6388109061',
        name: 'Samuel Eto ',
        role: 'user',
        email: 'user@gmail.com',
        avatar: null,
        verified: false,
        adminVerified: false,
        verificationToken: '87ec0a35-1483-441d-985b-598cc06fc373'
    };
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