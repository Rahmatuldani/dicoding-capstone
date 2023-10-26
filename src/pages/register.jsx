import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/selector';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const { currentUser } = useSelector(selectUser);

    if (currentUser) {
        return <Navigate to={'/'} replace/>;
    }
    return (
        <div>Register</div>
    );
};

export default Register;