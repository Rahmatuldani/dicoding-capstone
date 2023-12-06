import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../store/auth/action';
import { 
    Paper,
    Typography,
    TextField,
} from '@mui/material';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');

    function handleSubmit(event) {
        event.preventDefault();
        if (confirmPassword === password) {  
            const formData = new FormData();
            formData.append('password', password); 
            dispatch(resetPassword(formData));
        }
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
                Create a strong password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{ marginY: '8px' }} fullWidth value={password} onChange={setPassword} type='password' id='password' label='New Password' variant='standard' required/>
                    <TextField sx={{ marginTop: '8px' }} fullWidth value={confirmPassword} onChange={setConfirmPassword} type='password' id='confirmPass' label='Confirm Password' variant='standard' required/>
                    <div className='d-grid mt-4'>
                        <button className='btn btn-primary' type='submit'>Reset Password</button>
                    </div>
                </form>
            </Paper>
        </section>
    );
};

export default ResetPassword;