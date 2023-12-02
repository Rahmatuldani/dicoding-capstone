import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/auth/action';
import { 
    Paper,
    Typography,
    TextField,
    Button
} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(signIn({email, password}));
    }

    return (
        <section
            className='login-page'
            style={{
                width: '100%',
                height: '90vh',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Paper 
                elevation={3}
                square
                sx={{ 
                    width: '100%',
                    maxWidth: '400px' ,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}
            >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    SIGN IN
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField value={email} onChange={setEmail} sx={{ marginY: '8px' }} fullWidth type='email' id='email' label='Email' variant='standard' required/>
                    <TextField value={password} onChange={setPassword} sx={{ marginY: '8px' }} fullWidth type='password' id='password' label='Password' variant='standard' required/>
                    <Button variant='contained' sx={{ marginTop: '1rem' }} type='submit'>Sign In</Button>
                </form>
                <p style={{
                    margin: 0,
                    marginTop: '1rem'
                }}>Don&apos;t have account? <Link to='/register'>Sign up here!</Link></p>
            </Paper>
        </section>
    );
};

export default Login;