import { Box, Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Box component="footer" sx={{ p: 2, backgroundColor: '#407BFF', color: 'white' }}>
            <Container className='py-5'>
                <Row>
                    <Col md={3}>
                        <Typography variant='h6'>LIBRIFY</Typography>
                        {/* Logo */}
                    </Col>

                    <Col md={3}>
                        <Typography variant='h6'>Tentang Kami</Typography>
                        <Typography variant='body1'>Pengembang</Typography>
                    </Col>

                    <Col md={3}>
                        <Typography variant='h6'>Kontak</Typography>
                        <Typography variant='body1'>
                            Alamat <br/>
                            No. Telepon <br/> 
                            Email
                        </Typography>
                    </Col>

                    <Col md={3}>
                        <Typography variant='h6'>Sosial Media</Typography>
                        {/* Ikon sosial media */}
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
