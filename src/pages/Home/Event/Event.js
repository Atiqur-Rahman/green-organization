import React from 'react';

const Event = ({ event }) => {
    const getRandomColor = () => {
        const bgColor = ['Tomato', 'Orange', 'DodgerBlue', 'SlateBlue'];
        let color = bgColor[Math.floor(Math.random() * bgColor.length)];
        console.log(color);
        return color;
    };
    return (
        <div>
            <div className="card border-0" style={{ width: '14rem', position: 'relative' }}>
                <img src={event.img} className="card-img-top" alt="" />
                <div className="card-body w-100 py-3 rounded-bottom-3" style={{ backgroundColor: getRandomColor(), position: 'absolute', bottom: '0' }}>
                    <h5 className="text-center text-white mb-0">{event.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Event;
