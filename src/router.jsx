import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    useRouteError,
    isRouteErrorResponse
} from 'react-router-dom';
import App from './App';
import { 
    Books,
    Borrow, 
    Home, 
    Login, 
    Register 
} from './pages';
import { AuthRequired } from './utils/authRequired';
import { DetailBook } from './pages/book/detail';
import AddBook from './pages/book/input';
import DashboardUser from './pages/dashboard/users';
/* import DebtUser from './pages/dashboard/users/DebtUser';
import LikeUser from './pages/dashboard/users/LikeUser'; */
import BooksList from './pages/dashboard/admin';
import BorrowList from './pages/dashboard/admin/BorrowList';
import AddBookAdmin from './pages/dashboard/admin/AddBook';

export function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText}</h1>
    ) : (
        <h1>{error.message || error}</h1>
    );
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} errorElement={<ErrorBoundary/>}>
            <Route index element={<Home/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/books/:id' element={<DetailBook/>}/>
            <Route path='/books/add' element={<AddBook/>}/>
            <Route path='/borrows' element={<Borrow/>}/>
            <Route path='/dashboard/user' element={<DashboardUser/>}/>
            <Route path='/dashboard/admin' element={<BooksList/>}/>
            <Route path='/dashboard/admin/borrow' element={<BorrowList/>}/>
            <Route path='/dashboard/admin/addbook' element={<AddBookAdmin/>}/>
            <Route element={<AuthRequired/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Route>
        </Route>
    )
);

export default Router;
