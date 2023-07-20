import React, { useEffect, useState } from 'react';

const Events = () => {
    const [volunteerInfo, setVolunteerInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteer')
            .then((res) => res.json())
            .then((data) => setVolunteerInfo(data));

        console.log(volunteerInfo.id);
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        console.log(id);

        if (proceed) {
            fetch(`http://localhost:5000/volunteer/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = volunteerInfo.filter((volunteer) => id !== volunteer._id);
                    setVolunteerInfo(remaining);
                    console.log(data);
                });
        }
    };
    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-4">Next Event</h2>
            <div className="row">
                {volunteerInfo.map((volunteer) => (
                    <div className="d-flex justify-content-center col-12 col-md-6 col-lg-6">
                        <div className="card mb-3 bg-white" style={{ width: '300px', height: '100px' }}>
                            <div className="row g-0">
                                <div className="col-4">
                                    <img src={volunteer.banner} className="rounded-start" style={{ height: '99px' }} alt="" />
                                </div>
                                <div className="col-6">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: '16px' }}>
                                            {' '}
                                            {volunteer.name}
                                        </h5>
                                        <p className="card-text mb-0" style={{ fontSize: '14px' }}>
                                            {volunteer.username}
                                        </p>
                                        <p className="card-text" style={{ fontSize: '12px' }}>
                                            {' '}
                                            {volunteer.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button onClick={() => handleDelete(volunteer._id)} className="bg-danger mt-0 me-0 py-1 px-3">
                                        X
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
