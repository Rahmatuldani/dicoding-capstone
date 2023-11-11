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
            <Route path='/borrows' element={<Borrow/>}/>
            <Route element={<AuthRequired/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Route>
        </Route>
    )
);

export default Router;
