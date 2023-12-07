import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuAdmin from './admin/MenuAdmin';
import { BsBookFill, BsFillPlusSquareFill, BsLayersFill, BsPeopleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selector';
const SlideBar = ({ isActive }) => {
    
    const navigate = useNavigate();
    const { currentUser } = useSelector(selectAuth);
    /* const currentUser = {
        _id: '657038669e225d6388109061',
        name: 'Ahmad Zakaria ',
        role: 'admin',
        email: 'user@gmail.com',
        avatar: null,
        verified: false,
        adminVerified: false,
        verificationToken: '87ec0a35-1483-441d-985b-598cc06fc373'
    }; */
    return (
        <>
            <div className="slidebar col-auto min-vw-100 bg-light p-0 pt-2 pb-2">
                <div className='d-flex flex-column align-items-center'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button 
                            type="button" 
                            className={`btn btn-primary 
                            ${isActive === 'books' ? 'active' : ''}`} 
                            onClick={() => navigate('/dashboard/admin')}
                        >
                            <BsBookFill />
                        </button>
                        <button 
                            type="button" 
                            className={`btn btn-primary 
                            ${isActive === 'addBook' ? 'active' : ''}`} 
                            onClick={() => navigate('/dashboard/admin/addbook')}
                        >
                            <BsFillPlusSquareFill />
                        </button>
                        <button 
                            type="button" 
                            className={`btn btn-primary 
                            ${isActive === 'borrow' ? 'active' : ''}`} 
                            onClick={() => navigate('/dashboard/admin/borrow')}
                        >
                            <BsLayersFill />
                        </button>
                        <button 
                            type="button" 
                            className={`btn btn-primary 
                            ${isActive === 'users' ? 'active' : ''}`} 
                            onClick={() => navigate('/dashboard/admin/users')}
                        >
                            <BsPeopleFill />
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-auto min-vh-100 bg-light p-0 d-none d-lg-inline'>
                {currentUser.role === 'admin' ?
                    <MenuAdmin
                        onClickBookList={() => navigate('/dashboard/admin')}
                        onClickAddBook={() => navigate('/dashboard/admin/addbook')}
                        onClickBorrowList={() => navigate('/dashboard/admin/borrow')}
                        onClickUsersList={() => navigate('/dashboard/admin/users')}
                        isActive={isActive}
                    />
                    :
                    <Navigate to={'/'} replace/>
                }
            </div>
        </>
    );
};

SlideBar.propTypes = {
    isActive: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
};

export default SlideBar;