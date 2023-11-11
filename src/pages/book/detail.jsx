
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams   } from 'react-router-dom';
export const DetailBook = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams ();
    return (
        <section className='detail-book-page mt-4'>
            <Container>
                <Row>
                    <Col>
                        <Image src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/c16202b2-c1bf-497d-9759-d16e47a051cf.png' thumbnail />
                    </Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </section>
    );
};
