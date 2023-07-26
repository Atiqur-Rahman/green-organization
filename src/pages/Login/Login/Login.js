import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();

    let errorMessage;
    let from = location.state?.from?.pathname || '/';

    if (loading) {
        <Loading></Loading>;
    }

    if (error) {
        errorMessage = (
            <p className="text-danger" style={{ fontSize: '10px' }}>
                {error?.message}
            </p>
        );
    }

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);

        try {
            const response = await axios.post('https://green-organization-server2-production.up.railway.app/login', { email });
            localStorage.setItem('accessToken', response?.data?.accessToken);
        } catch (error) {
            console.log(error.message);
        }

        navigate(from, { replace: 'true' });
        reset();
    };

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="d-flex justify-content-center border border-1 bg-white pt-4 rounded-1" style={{ width: '350px' }}>
                    <div>
                        <h5>Login</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="mb-3" type="text" name="email" placeholder="Email" {...register('email', { required: true })} />
                            <br />
                            <input className="mb-3" type="password" name="password" placeholder="Password" {...register('password', { required: true })} />
                            <br />
                            <input className="mb-0 w-100 bg-primary border border-3 border-primary text-white rounded-1" type="submit" value="Login" />
                            <p className="my-0" style={{ fontSize: '10px' }}>
                                Don't have an account?
                                <button onClick={() => navigate('/register')} style={{ fontSize: '10px' }} className="btn btn-link ps-1">
                                    Create an account
                                </button>
                            </p>
                            {errorMessage}
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
