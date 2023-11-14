import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/auth/selector';
import { Navigate } from 'react-router-dom';

const Register = () => {
    // jangan diubah 
    const { currentUser } = useSelector(selectAuth);
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput();

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    if (currentUser) {
        return <Navigate to={'/'} replace/>;
    }
    // jangan diubah 

    return (
        <div>
            Register
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={name} onChange={setName} />
                <input type="email" placeholder="email" value={email} onChange={setEmail} />
                <input type="password" placeholder="password" value={password} onChange={setPassword} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;