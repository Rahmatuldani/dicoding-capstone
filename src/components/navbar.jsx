import React from 'react';
import { 
    AppBar, 
    Button, 
    Container, 
    IconButton, 
    Menu, 
    MenuItem, 
    Stack, 
    Toolbar, 
    Typography 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../store/auth/selector';
import AvatarComponent from './avatar';
import { signOut } from '../store/auth/action';

function Navbar() {
    const { currentUser } = useSelector(selectAuth);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOpenUserMenu(event) {
        setAnchorElUser(event.currentTarget);
    }
    
    function handleCloseUserMenu() {
        setAnchorElUser(null);
    }

    function handleLogout() {
        handleCloseUserMenu();
        dispatch(signOut());
    }

    return ( 
        <header>
            <AppBar position='static'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' component='div' onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                            LIBRIFY
                        </Typography>
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1, marginLeft: '1rem' }}>
                            <Button color='inherit' onClick={() => navigate('/books')}>Buku</Button>
                            <Button color='inherit' onClick={() => navigate('/books/add')}>Tambah Buku</Button>
                        </Stack>
                        {currentUser ? 
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AvatarComponent name={currentUser.name}/>
                            </IconButton>
                            :
                            <Button color='inherit' onClick={() => navigate('/login')}>Login</Button>
                        }
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem  onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Akun</Typography>
                            </MenuItem>
                            <MenuItem  onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Dashboard</Typography>
                            </MenuItem>
                            <MenuItem  onClick={handleLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Navbar;