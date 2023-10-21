import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dani from './pages/dani';
import Muja from './pages/muja';
import Ian from './pages/ian';
import App from './App';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/dani' element={<Dani/>}/>
                <Route path='/muja' element={<Muja/>}/>
                <Route path='/ian' element={<Ian/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
