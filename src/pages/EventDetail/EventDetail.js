import React from 'react';
import useEventDetail from '../../hooks/useEventDetail';
import { useNavigate, useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = () => {
    const { eventId } = useParams();
    const [event] = useEventDetail(eventId);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-center mt-5">Volunteer work you want to do</h1>
            <div className="d-flex justify-content-center">
                <div className="card">
                    <div className="card-border-top"></div>
                    <div className="img">
                        <img src={event.banner} style={{ width: '100%' }} alt="" />
                    </div>
                    <p className="job"> {event.name}</p>
                    <button onClick={() => navigate(`/confirmationDetail/${eventId}`)}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
