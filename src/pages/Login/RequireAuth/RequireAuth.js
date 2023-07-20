import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    // console.log(user);

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div className="mt-5">
                <h4 className="text-danger text-center">Your email is not verified</h4>
                <h4 className="text-success text-center">Please verify your email address</h4>
                <div className="d-flex justify-content-center">
                    <button
                        className="bg-primary text-white rounded-2 border px-3 py-1"
                        onClick={async () => {
                            const success = await sendEmailVerification();
                            if (success) {
                                toast('Email Sent');
                            }
                        }}
                    >
                        Send Verification Email Again
                    </button>
                </div>
            </div>
        );
    }
    return children;
};

export default RequireAuth;
