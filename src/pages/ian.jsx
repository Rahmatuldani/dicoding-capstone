import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CardSkeleton from '../components/cardSkeleton';
import strLimit from '@supercharge/strings';
import axios from 'axios';

const Ian = () => {
    const [restaurants, setRestaurants] = React.useState();
    const api = axios.create({
        baseURL: 'https://restaurant-api.dicoding.dev',
    });
    const baseURLImage = 'https://restaurant-api.dicoding.dev/images/small/';

    React.useState(() => {
        const fetchData = async () => {
            try {
                const result = await api.get('/list');
                setRestaurants(result.data.restaurants);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, 3000);
    }, []);

    return (
        <section className='dani-page m-4'>
            <h1 className='text-center mb-4'>Restaurant API</h1>
            <section className='movie-list d-flex flex-wrap justify-content-center gap-4'>
                {!restaurants? (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                ) : (
                    restaurants.map((item, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={baseURLImage+item.pictureId} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text >{strLimit(item.description).limit(100, '...').get()}</Card.Text>
                                <Button variant="primary">Detail</Button>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </section>
        </section>
    );
};

export default Ian;