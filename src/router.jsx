import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Muja from './pages/muja';
import Ian from './pages/ian';
import App from './App';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/muja' element={<Muja/>}/>
                <Route path='/ian' element={<Ian/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
