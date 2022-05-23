import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    const user = useSelector(state => state.login.user.name);

    if (!user) {
        return <Navigate to='/login' state={{fromPage: path, replace: true}} />
    }

    return (
        <>
            {children}
        </>  
    );
}

export default ProtectedRoute;