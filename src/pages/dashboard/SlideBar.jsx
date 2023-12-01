/* eslint-disable react/prop-types */
import { BsExclamationTriangleFill, 
    BsFillCalendar2PlusFill, 
    BsFillHeartFill 
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SlideBar = ({isActive}) => {
    const navigate = useNavigate();
    return (
        <div className='col-auto min-vh-100 bg-light p-0'>
            <div className="list-group list-group-flush">
                <a 
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'borrow' ? 'active' : ''}`}
                    onClick={() => navigate('/dashboard/user')}
                >
                    <BsFillCalendar2PlusFill /> <span className='md-1 d-none d-lg-inline'>Peminjaman</span>
                </a>
                <a 
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'debt' ? 'active' : ''}`}
                    onClick={() => navigate('/dashboard/user/debt')}
                >
                    <BsExclamationTriangleFill /> <span className='md-1 d-none d-lg-inline'>Denda</span>
                </a>
                <a 
                    className={`list-group-item list-group-item-action list-group-item-light p-3 text-primary ${isActive === 'like' ? 'active' : ''}`}
                    onClick={() => navigate('/dashboard/user/like')}
                >
                    <BsFillHeartFill /> <span className='md-1 d-none d-lg-inline'>LIke</span>
                </a>
            </div>
        </div>
    );
};

export default SlideBar;