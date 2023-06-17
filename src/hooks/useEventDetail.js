import { useEffect, useState } from 'react';

const useEventDetail = (eventId) => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/event/${eventId}`)
            .then((res) => res.json())
            .then((data) => setEvent(data));
    }, [eventId]);
    return [event];
};

export default useEventDetail;
