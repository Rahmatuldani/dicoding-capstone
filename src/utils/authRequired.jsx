import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from '../store/auth/selector';

export function AuthRequired() {
    const { currentUser } = useSelector(selectAuth);

    // Change to negate current user for use auth
    if (currentUser) return <Navigate to={'/'} replace/>;

    return <Outlet/>;
}