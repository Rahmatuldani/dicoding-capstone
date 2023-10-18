import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CardSkeleton from '../components/cardSkeleton';
import axios from 'axios';

const Dani = () => {
    const [data, setData] = React.useState();

    React.useState(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=1c295f3a4ffee72dae8943f83cd7a3f7');
                setData(result.data.results);
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
            <h1 className='text-center mb-4'>Movie API</h1>
            <section className='movie-list d-flex flex-wrap justify-content-center gap-4'>
                {!data ? 
                    <>
                        <CardSkeleton/>
                        <CardSkeleton/>
                        <CardSkeleton/>
                    </>
                    :
                    data.map((item, index) => (
                        <Card key={index} style={{ width: '18rem', height: 'fit-content' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.original_title}</Card.Title>
                                <Card.Text>{item.overview}</Card.Text>
                                <Button variant="primary">Detail</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </section>
        </section>
    );
};

export default Dani;