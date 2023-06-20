import React from 'react';
import google from '../../../image/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    loading && <Loading></Loading>;

    const errorMessage = error && <p>{error.message}</p>;

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className="mt-3 px-3">OR</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            <div className="mb-5">
                <button
                    onClick={async () => {
                        const success = await signInWithGoogle();
                        success && navigate(from, { replace: true });
                    }}
                    className="w-100 rounded-1 border border-3 border-primary bg-primary"
                >
                    <img src={google} alt="" />
                    <span className="px-2 text-white">Google Sign In</span>
                </button>
                <p style={{ fontSize: '10px', color: 'red' }} className="mt-1 ps-1">
                    {errorMessage}
                </p>
            </div>
        </div>
    );
};

export default SocialLogin;
