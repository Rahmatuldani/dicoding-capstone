import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/auth/action';
import { 
    Paper,
    Typography,
    TextField,
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
            className='forgot-password-page'
            style={{
                width: '100%',
                height: '90vh',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
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
                    margin: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    boxShadow: 'none',
                    border: '1px solid #ccc'
                }}
            >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    SIGN IN
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField value={email} onChange={setEmail} sx={{ marginY: '8px' }} fullWidth type='email' id='email' label='Email' variant='standard' required/>
                    <TextField value={password} onChange={setPassword} sx={{ marginY: '8px' }} fullWidth type='password' id='password' label='Password' variant='standard' required/>
                    <div className='d-grid mt-4'>
                        <button className='btn btn-primary' type='submit'>Sign In</button>
                    </div>
                </form>
                <p style={{
                    margin: 0,
                    marginTop: '1rem',
                    fontSize: '12px',
                }}><Link to='/forgotpassword'>Forgotten your password?</Link></p>
            </Paper>
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
                    padding: '2rem',
                    boxShadow: 'none',
                    border: '1px solid #ccc'
                }}
            >
                <p style={{
                    margin: 0,
                    fontSize: '14px',
                }}>Don&apos;t have an account? <Link to='/register'>Create an account</Link></p>
            </Paper>
        </section>
    );
};

export default Login;