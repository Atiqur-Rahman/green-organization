import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    if (loading) {
        <Loading></Loading>;
    }

    if (error) {
        console.log(error);
    }

    if (user) {
        navigate('/');
    }

    const onSubmit = (data) => {
        // console.log(data.email);
        signInWithEmailAndPassword(data.email, data.password);
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
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
