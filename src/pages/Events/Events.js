import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../shared/Loading/Loading';

const Events = () => {
    const [user] = useAuthState(auth);
    const [volunteerInfo, setVolunteerInfo] = useState([]);
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const getVolunteerInfo = async () => {
            const email = user?.email;
            const url = `https://green-organization-server.vercel.app/volunteer?email=${email}`;
            setSpinner(true);
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                setSpinner(false);
                setVolunteerInfo(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        };
        getVolunteerInfo();
    }, [navigate, user]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            fetch(`https://green-organization-server.vercel.app/volunteer/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = volunteerInfo.filter((volunteer) => id !== volunteer._id);
                    setVolunteerInfo(remaining);
                });
        }
    };

    if (spinner) {
        return <Loading></Loading>;
    }

    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-4">Next Event</h2>
            <div className="row">
                {volunteerInfo.map((volunteer) => (
                    <div key={volunteer._id} className="d-flex justify-content-center col-12 col-md-6 col-lg-6">
                        <div className=" mb-3 bg-white border border-1 rounded-2" style={{ width: '325px', height: '125px' }}>
                            <div className="row g-0">
                                <div className="col-4">
                                    <img src={volunteer.banner} className="rounded-start" style={{ height: '124px' }} alt="" />
                                </div>
                                <div className="col-6">
                                    <div className="p-2 ms-2" style={{ padding: '8px' }}>
                                        <h5 className="mb-1 mt-3" style={{ fontSize: '16px' }}>
                                            {' '}
                                            {volunteer.name}
                                        </h5>
                                        <p className=" mb-0" style={{ fontSize: '14px' }}>
                                            {volunteer.username}
                                        </p>
                                        <p className="card-text" style={{ fontSize: '12px' }}>
                                            {' '}
                                            {volunteer.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button onClick={() => handleDelete(volunteer._id)} className="bg-danger border border-0 rounded-pill text-white" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '0', paddingBottom: '1px', marginLeft: '27px', marginTop: '2px' }}>
                                        x
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
