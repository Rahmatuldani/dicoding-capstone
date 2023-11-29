/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const BookCard = ({ book }) => {
    const navigate = useNavigate();
    return (
        <Card as='a'
            className='hoverable' 
            style={{ 
                width: '12rem',
                cursor: 'pointer',
                textDecoration: 'none',
            }} 
            onClick={() => navigate(`/books/${book._id}`)}
        >
            <Card.Img variant="top" src={`http://20.2.89.234:5000/api/books/${book?.poster}/poster`} className='py-1 pt-3'/>
            <Card.Body className='d-flex flex-column gap-2'>
                <div className='d-flex align-items-center gap-1'>
                    <BsFillStarFill className='text-warning' />
                    <small className="text-danger">
                        {book.rate}
                    </small> 
                </div>
                <Card.Subtitle className='lh-sm'>{book.title}</Card.Subtitle>
                <Card.Text>{book.year}</Card.Text>
            </Card.Body>
        </Card>
    );
};