import React from 'react';
import google from '../../../image/google.png';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    loading && <Loading></Loading>;

    const errorMessage = error && <p>{error.message}</p>;

    const handleSignIn = async () => {
        await signInWithGoogle();
    };

    if (user) {
        const email = user?.email;
        axios
            .post('https://green-organization-server.vercel.app/login', { email })
            .then(({ data }) => {
                localStorage.setItem('accessToken', data.accessToken);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className="mt-3 px-3">OR</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            <div className="mb-5">
                <button onClick={handleSignIn} className="w-100 rounded-1 border border-3 border-primary bg-primary">
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
