import { BsFillStarFill } from 'react-icons/bs';

const Dashboard = () => {
    return (
        <div className="flex-wrap">
            <div className="bg-light">
                <a className="d-flex text-decoration-none align-items-center">
                    <BsFillStarFill className='text-warning' /><span className='ms-2'>Book Store</span>
                </a>
            </div>
        </div>
    );
};

export default Dashboard;