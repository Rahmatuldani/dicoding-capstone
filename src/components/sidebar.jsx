import { Box, Fade, Paper, Slide } from '@mui/material';
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
                        {menus.map((menu, i) => (
                            <Link to={menu.path} key={i}>{menu.title}</Link>
                        ))}
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