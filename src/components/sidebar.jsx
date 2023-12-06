import { Box, Fade, ListItem, Paper, Slide, ListItemText, List, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Sidebar({isOpen, menus}) {
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
                            height: '100%'
                        }}
                    >
                        <List>
                            {menus.map((menu, i) => (
                                <ListItem button key={i}>
                                    <ListItemText>
                                        <Link to={menu.path} style={{ textDecoration: 'none' }}>
                                            <Typography
                                                variant='h6'
                                                color={'primary'}
                                                sx={{
                                                    padding: '16px',
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                {menu.title}
                                            </Typography>
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Slide>
            </Box>
        </Fade>
    );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    menus: PropTypes.array.isRequired
};

export default Sidebar;