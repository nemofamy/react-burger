import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({children, needAuth}) {
    const location = useLocation();
    const path = location.pathname;
    const user = useSelector(state => state.auth.user.name);

    if (!user && needAuth) {
        return <Navigate to='/login' state={{fromPage: path, replace: true}} />
    }

    return (
        <>
            {children} 
        </>  
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    needAuth: PropTypes.bool.isRequired
}

export default ProtectedRoute;