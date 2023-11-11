import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/auth/action';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signIn({email, password}));
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