import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart } from '../store/auth/action';
import { selectAuth } from '../store/auth/selector';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { currentUser } = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    if (currentUser) {
        return <Navigate to={'/'} replace/>;
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signInStart({email, password}));
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email' value={email} onChange={setEmail}/>
                <input type='password' placeholder='password' value={password} onChange={setPassword}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;