import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    // if(!user.emailVerified) {

    // }
    return children;
};

export default RequireAuth;
