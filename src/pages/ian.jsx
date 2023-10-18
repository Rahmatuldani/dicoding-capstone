import axios from 'axios';

const Ian = () => {
    const [restaurants, setRestaurants] = React.useState();
    const api = axios.create({
        baseURL: 'https://restaurant-api.dicoding.dev',
    });

    React.useState(() => {
        const fetchData = async () => {
            try {
                const result = await api.get('/list');
                setRestaurants(result.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, 3000);
    });
}