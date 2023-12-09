import { Home, LibraryBooks } from '@mui/icons-material';
import { 
    Box, 
    Fade, 
    Paper, 
    Slide,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Sidebar({isOpen, menus, handleSidebar}) {
    const navigate = useNavigate();
    return (
        <Fade
            in={isOpen}
        >
            <Box
                sx={{
                    backgroundColor: '#00000080',
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    zIndex: 99
                }}
            >
                <Slide
                    direction='right'
                    in={isOpen}
                    mountOnEnter
                    unmountOnExit
                >
                    <Paper
                        variant='outlined'
                        square
                        sx={{
                            width: '60%',
                            height: '100%',
                            paddingTop: '1rem'
                        }}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ padding: '0 2rem' }} onClick={() => { handleSidebar(!isOpen); navigate('/');}}>
                                    <ListItemIcon sx={{ minWidth: 0, marginRight: 2 }}>
                                        <Home color='primary' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Beranda'
                                        primaryTypographyProps={{
                                            variant: 'h6',
                                            color: 'primary',
                                            sx: {
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                },
                                            },
                                        }}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        {menus.map((menu, i) => (
                            <List key={i}>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ padding: '0 2rem' }} onClick={() => { handleSidebar(!isOpen); navigate(menu.path);}}>
                                        <ListItemIcon sx={{ minWidth: 0, marginRight: 2 }}>
                                            <LibraryBooks color='primary' />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={menu.title}
                                            primaryTypographyProps={{
                                                variant: 'h6',
                                                color: 'primary',
                                                sx: {
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                    },
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        ))}
                    </Paper>
                </Slide>
            </Box>
        </Fade>
    );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    menus: PropTypes.array.isRequired,
    handleSidebar: PropTypes.func
};

export default Sidebar;