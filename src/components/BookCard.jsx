/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import { BsHeart, BsHeartFill  } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../store/auth/selector';

export const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const { currentUser } = useSelector(selectAuth);

    const handleFavorite = () => {
        const totalLike = book?.likes?.length;
        const isLikedByCurrentUser = totalLike > 0 && book.likes.some(like => like.userId === currentUser?._id);
    
        const heartIcon = isLikedByCurrentUser ? <BsHeartFill className='icon-pink' /> : <BsHeart className='icon-pink' />;
        const likesCount = totalLike > 0 && <small className="icon-pink fs-6 ps-1">{totalLike}</small>;
    
        return (
            <Card.Text>
                {heartIcon}
                {likesCount}
            </Card.Text>
        );
    };

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
            <Card.Img 
                variant="top" 
                src={`http://localhost:5000/api/books/${book.poster}/poster`}
                className='py-1 pt-3'
                style={{ 
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    aspectRatio: '1/1' 
                }}
            />
            <Card.Body className='d-flex flex-column gap-2'>
                <div className='d-flex align-items-center gap-1'>
                    {handleFavorite()}
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