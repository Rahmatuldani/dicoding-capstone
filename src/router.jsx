import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Muja from './pages/muja';
import App from './App';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/muja' element={<Muja/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
