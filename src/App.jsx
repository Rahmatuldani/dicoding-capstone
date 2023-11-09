import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default App;