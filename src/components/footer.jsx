import { Box, Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box component="footer" sx={{ p: 2, backgroundColor: '#407BFF', color: 'white' }}>
            <Container className='py-5'>
                <Row style={{ justifyContent: 'space-around' }}>
                    <Col md={3}>
                        <Typography variant='h6'>LIBRIFY</Typography>
                        {/* Logo */}
                    </Col>

                    <Col md={3}>
                        <Typography variant='h6'>Tentang Kami</Typography>
                        <Typography variant='body1'>
                            <Link to='https://www.linkedin.com/in/rahmatulramadhani' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>Rahmatul Ramadhani</Link> <br/>
                            <Link to='https://www.linkedin.com/in/ianseptiana' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>Ian Septiana</Link> <br/>
                            <Link to="https://www.linkedin.com/in/amujahidakbar" target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>Ahmad Mujahid Akbar</Link> <br/>
                            <Link target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>Yasir Amri</Link> <br/>
                        </Typography>
                    </Col>

                    <Col md={3}>
                        <Typography variant='h6'>Repository</Typography>
                        <Typography variant='body1'>
                            <Link to='https://github.com/Rahmatuldani/dicoding-capstone' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none', color: 'white'}}>GitHub</Link>
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Typography variant="body2" align="center">
                    Copyright &copy; {new Date().getFullYear()} Librify
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
