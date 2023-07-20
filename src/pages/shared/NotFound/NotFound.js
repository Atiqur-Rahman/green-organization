import React from 'react';
import page404 from '../../../image/page-not-found.png';

const NotFound = () => {
    return (
        <div>
            <h2 className="text-center text-primary">Page Not Found</h2>
            <img className="w-50 d-block mx-auto" src={page404} alt="" />
        </div>
    );
};

export default NotFound;
