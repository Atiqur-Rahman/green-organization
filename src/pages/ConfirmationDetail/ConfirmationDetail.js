import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useEventDetail from '../../hooks/useEventDetail';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ConfirmationDetail = () => {
    const { eventId } = useParams();
    const [user] = useAuthState(auth);
    const [event] = useEventDetail(eventId);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    console.log(result.insertedId);
                    toast('You are selected as volunteer for this event!!');
                    reset();
                }
            });
    };
    return (
        <div>
            <h2 className="text-center mt-4">Please give your information</h2>
            <form className="w-25 mx-auto mt-2" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" value={user?.displayName} name="username" type="text" {...register('username', { disabled: true })} />
                <br />
                <input className="mb-2" value={user?.email} name="email" type="text" {...register('email', { disabled: true })} />
                <br />
                <input className="mb-2" name="name" value={event.name} type="text" {...register('name')} />
                <br />
                <input className="mb-2" name="address" type="text" {...register('address')} />
                <br />
                <input className="mb-2" name="phone" type="number" {...register('phone')} />
                <br />
                <input className="bg-primary text-white border-primary rounded-1" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ConfirmationDetail;
