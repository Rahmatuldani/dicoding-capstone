import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../store/auth/action';
import { 
    Paper,
    Typography,
    TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useInput('');


    function handleSubmit(event) {
        event.preventDefault();
        dispatch(forgotPassword({email}));
    }

    return (
        <section
            className='login-page'
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
                    FORGOT PASSWORD
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField value={email} onChange={setEmail} sx={{ marginY: '8px' }} fullWidth type='email' id='email' label='Email' variant='standard' required/>
                    <div className='d-grid mt-4'>
                        <button className='btn btn-primary' type='submit'>Send Reset Password Link</button>
                    </div>
                </form>
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
                }}><Link to='/login'>Return to Login Page</Link></p>
            </Paper>
        </section>
    );
};

export default ForgotPassword;