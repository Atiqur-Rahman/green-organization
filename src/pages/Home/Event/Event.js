import React from 'react';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {
    const { _id, name, banner } = event;
    const navigate = useNavigate();
    const getRandomColor = () => {
        const bgColor = ['Tomato', 'Orange', 'DodgerBlue', 'SlateBlue'];
        let color = bgColor[Math.floor(Math.random() * bgColor.length)];
        // console.log(color);
        return color;
    };
    return (
        <div>
            <div onClick={() => navigate(`/event/${_id}`)} className="card border-0" style={{ width: '13rem', position: 'relative', cursor: 'pointer' }}>
                <img src={banner} className="card-img-top" alt="" />
                <div className="card-body w-100 rounded-bottom-3" style={{ backgroundColor: getRandomColor(), position: 'absolute', bottom: '0' }}>
                    <h5 className="text-center text-white mb-0">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Event;
