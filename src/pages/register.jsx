import { useSelector } from 'react-redux';
import { selectAuth } from '../store/auth/selector';
import { Navigate } from 'react-router-dom';

const Register = () => {
    // jangan diubah 
    const { currentUser } = useSelector(selectAuth);
    
    if (currentUser) {
        return <Navigate to={'/'} replace/>;
    }
    // jangan diubah 

    return (
        <div>Register</div>
    );
};

export default Register;