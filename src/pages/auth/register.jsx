// import useInput from '../../hooks/useInput';
// import { useDispatch } from 'react-redux';
// import { signIn } from '../../store/auth/action';
import { 
    Paper,
    Typography,
    TextField,
    Button
} from '@mui/material';
import {
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    // const dispatch = useDispatch();
    // const [email, setEmail] = useInput('');
    // const [password, setPassword] = useInput('');

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     dispatch(signIn({email, password}));
    // }

    return (
        <section
            className='register-page'
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
                    SIGN UP
                </Typography>
                <form>
                    <TextField sx={{ marginY: '8px' }} fullWidth id='name' label='Name' variant='standard' required/>
                    <TextField sx={{ marginY: '8px' }} fullWidth type='email' id='email' label='Email' variant='standard' required/>
                    <TextField sx={{ marginY: '8px' }} fullWidth type='password' id='password' label='Password' variant='standard' required/>
                    <TextField sx={{ marginY: '8px' }} fullWidth type='password' id='confirmPass' label='Confirm Password' variant='standard' required/>
                    <Form.Group className='test' style={{ margin: '8px 0' }}>
                        <Form.Label>KTP</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant='contained' sx={{ marginTop: '1rem' }}>Sign Up</Button>
                </form>
                <p style={{
                    margin: 0,
                    marginTop: '1rem'
                }}>Already have account? <Link to='/login'>Sign in here!</Link></p>
            </Paper>
        </section>
    );
};

export default Register;