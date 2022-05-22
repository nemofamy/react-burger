import AppHeader from '../components/app-header/app-header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <AppHeader activePage="Конструктор" />
            <Outlet />
        </>
    );
}

export default Layout;