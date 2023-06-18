import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || error1) {
        console.log(error);
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate(from, { replace: 'true' });
    };

    if (user) {
        console.log(user);
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="d-flex justify-content-center border border-1 bg-white pt-4 rounded-1" style={{ width: '350px' }}>
                    <div>
                        <h5>Register as a Volunteer</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="mb-3 mt-3" type="text" name="name" placeholder="Name" {...register('name', { required: true })} />
                            <br />
                            <input className="mb-3" type="text" name="email" placeholder="Email" {...register('email', { required: true })} />
                            <br />
                            <input className="mb-3" type="password" name="password" placeholder="Password" {...register('password', { required: true })} />
                            <br />
                            {/* <input className="mb-3" type="number" name="phone" address placeholder="Phone" {...register('phone')} />
                            <br /> */}
                            <input className=" w-100 bg-primary border border-3 border-primary text-white rounded-1" type="submit" value="Register" />
                        </form>
                        <p className="mb-4" style={{ fontSize: '10px' }}>
                            Already have an account?
                            <button onClick={() => navigate('/login')} style={{ fontSize: '10px' }} className="btn btn-link ps-1">
                                Please Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
