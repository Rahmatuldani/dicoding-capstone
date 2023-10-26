import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../store/user/selector';

export function AuthRequired() {
    const { currentUser } = useSelector(selectUser);

    // Change to negate current user for use auth
    if (!currentUser) return <Navigate to={'/login'} replace/>;

    return <Outlet/>;
}