import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dani from './pages/dani';
import App from './App';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/dani' element={<Dani/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;