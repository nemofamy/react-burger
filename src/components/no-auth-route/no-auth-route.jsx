import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const NoAuthRoute = ({children}) => { 
    const user = useSelector(state => state.login.user.name);
    if (user) {
        return <Navigate to='/profile' replace={true}/>
    }

    return (
        <>
            {children}
        </>  
    );
}

export default NoAuthRoute;