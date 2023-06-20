import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useEventDetail from '../../hooks/useEventDetail';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ConfirmationDetail = () => {
    const { eventId } = useParams();
    const [user] = useAuthState(auth);
    const [events] = useEventDetail(eventId);

    const handleSubmit = (event) => {
        event.preventDefault();

        const volunteerInfo = {
            username: user.displayName,
            email: user.email,
            name: events.name,
            banner: events.banner,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };
        console.log(volunteerInfo);

        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(volunteerInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    // console.log(result.insertedId);
                    toast('You are selected as volunteer for this event!!');
                    event.target.reset();
                }
            });
    };

    return (
        <div>
            <h2 className="text-center mt-4">Please give your information</h2>
            <form className="w-25 mx-auto mt-2" onSubmit={handleSubmit}>
                <input className="mb-2" name="username" value={user.displayName || ''} type="text" />
                <br />
                <input className="mb-2" name="email" value={user.email || ''} type="text" />
                <br />
                <input className="mb-2" name="name" value={events.name || ''} type="text" />
                <br />
                <input className="mb-2" name="banner" value={events.banner || ''} type="text" />
                <br />
                <input className="mb-2" name="address" type="text" />
                <br />
                <input className="mb-2" name="phone" type="number" />
                <br />
                <input className="bg-primary text-white border-primary rounded-1" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ConfirmationDetail;
