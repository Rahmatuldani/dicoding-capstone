import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from './components';

const App = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default App;