import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CardSkeleton from '../components/cardSkeleton';
import axios from 'axios';

const Muja = () => {
    const [data, setData] = React.useState();

    React.useState(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
                setData(result.data.teams);
            } catch (error) {
                console.log(error);
            }
        };

        setTimeout(() => {
            fetchData();
        }, 3000);
    }, []);

    return (
        <section className='muja-page m-4'>
            <h1 className='text-center mb-4'>Premier League Teams</h1>
            <section className='movie-list d-flex flex-wrap justify-content-center gap-4'>
                {!data ? 
                    <>
                        <CardSkeleton/>
                        <CardSkeleton/>
                        <CardSkeleton/>
                    </>
                    :
                    data.map((teams) => (
                        <Card key={teams.idTeam} style={{ width: '18rem', height: 'fit-content' }}>
                            <Card.Img variant="top" src={`${teams.strStadiumThumb}`} />
                            <Card.Body>
                                <Card.Title>{teams.strTeam}</Card.Title>
                                <Card.Text>{teams.strDescriptionEN}</Card.Text>
                                <Button variant="primary">Detail</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </section>
        </section>
    );
};

export default Muja;
