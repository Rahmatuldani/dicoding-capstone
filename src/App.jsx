import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <p>App Page</p>
            <Outlet/>
        </>
    );
};

export default App;