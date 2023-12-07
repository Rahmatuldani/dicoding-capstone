import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/auth/action';
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
import React from 'react';

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');
    const [ktp, setKtp] = React.useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (confirmPassword === password) {  
            const formData = new FormData();
            formData.append('name', name); 
            formData.append('email', email); 
            formData.append('password', password); 
            formData.append('ktp', ktp); 
            dispatch(signUp(formData));
        }
    }

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
                <form onSubmit={handleSubmit}>
                    <TextField sx={{ marginY: '8px' }} fullWidth value={name} onChange={setName} id='name' label='Name' variant='standard' required/>
                    <TextField sx={{ marginY: '8px' }} fullWidth value={email} onChange={setEmail} type='email' id='email' label='Email' variant='standard' required/>
                    <TextField sx={{ marginY: '8px' }} fullWidth value={password} onChange={setPassword} type='password' id='password' label='Password' variant='standard' required/>
                    <TextField sx={{ marginTop: '8px' }} fullWidth value={confirmPassword} onChange={setConfirmPassword} type='password' id='confirmPass' label='Confirm Password' variant='standard' required/>
                    { confirmPassword !== password ? <Typography variant='subtitle2' sx={{ color: 'red' }}>Confirm password not same</Typography> : ''}
                    <Form.Group className='test' style={{ marginTop: '15px', marginBottom: '10px' }}>
                        <Form.Label style={{ margin: '1px 0' }}>KTP</Form.Label>
                        <Form.Control type="file" onChange={(e) => setKtp(e.target.files[0])} required/>
                    </Form.Group>
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{ marginTop: '1rem' }}
                    >Sign Up</Button>
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