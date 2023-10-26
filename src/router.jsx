/* eslint-disable react-refresh/only-export-components */
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

export function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText}</h1>
    ) : (
        <h1>{error.message || error}</h1>
    );
}

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} errorElement={<ErrorBoundary/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route element={<AuthRequired/>}>
                <Route index element={<Home/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/borrows' element={<Borrow/>}/>
            </Route>
        </Route>
    )
);
