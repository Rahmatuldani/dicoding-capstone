import { useParams } from 'react-router-dom';
import { Loading } from '../../../components';
import { BookCard } from '../../../components/BookCard';
import SlideBar from '../SlideBar';
import '../style.css';
import { Alert } from 'react-bootstrap';

const LikeUser  = () => {
    const { role } = useParams();
    const currentItems = [
        {
            _id: '1',
            poster: '',
            title: 'Buku 1',
            year: '2021',
        }
    ];
    const isLoading = () => {
        if (currentItems.length === 0) {
            return false;
        }
        return <Loading/>;
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <SlideBar isActive='like' role={role}/>
                <div className='col'>
                    <h3 className='pt-3'>Daftar Buku Disukai</h3>
                    <div className='d-flex flex-wrap justify-content-center gap-4'>
                        {
                            !currentItems || currentItems.length === 0
                                ? 
                                isLoading() || 
                            <Alert  variant='danger'>
                                <h5>Buku tidak ada</h5>
                            </Alert>
                                : 
                                currentItems.map((book, index) => (
                                    <BookCard
                                        key={index}
                                        book={book}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikeUser;