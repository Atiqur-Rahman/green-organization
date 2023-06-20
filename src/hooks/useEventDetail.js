import { useEffect, useState } from 'react';

const useEventDetail = (eventId) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/event/${eventId}`)
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, [eventId]);
    return [events];
};

export default useEventDetail;
