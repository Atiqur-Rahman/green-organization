import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useEventDetail from '../../hooks/useEventDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';

const ConfirmationDetail = () => {
    const { eventId } = useParams();
    const [user] = useAuthState(auth);
    const [events] = useEventDetail(eventId);
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);

    if (spinner) {
        return <Loading></Loading>;
    }

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

        setSpinner(true);
        fetch('https://green-organization-server2-production.up.railway.app/volunteer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(volunteerInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    toast('You are selected as volunteer for this event!!');
                    event.target.reset();
                }
                setSpinner(false);
            });

        navigate('/');
        /* axios.post('https://green-organization-server2-production.up.railway.app/volunteer', volunteerInfo).then((response) => {
            if (response.data.insertedId) {
                toast('You are selected as volunteer for this event!!');
                event.target.reset();
                navigate('/events');
            }
        }); */
    };

    return (
        <div>
            <h2 className="text-center mt-4">Please give your information</h2>
            <div className="d-flex justify-content-center mt-3">
                <form onSubmit={handleSubmit}>
                    <input className="mb-2" name="username" value={user.displayName || ''} type="text" />
                    <br />
                    <input className="mb-2" name="email" value={user.email || ''} type="text" />
                    <br />
                    <input className="mb-2" name="name" value={events.name || ''} type="text" />
                    <br />
                    <input className="mb-2" name="banner" value={events.banner || ''} type="text" />
                    <br />
                    <input className="mb-2" name="address" placeholder="Address" type="text" />
                    <br />
                    <input className="mb-2" name="phone" placeholder="Contact Number" type="number" />
                    <br />
                    <input className="bg-primary text-white border-primary rounded-1" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ConfirmationDetail;
