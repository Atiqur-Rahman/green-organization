import { useEffect, useState } from 'react';

const useEventDetail = (eventId) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            fetch(`https://green-organization-server.vercel.app/event/${eventId}`)
                .then((res) => res.json())
                .then((data) => setEvents(data))
                .catch((error) => console.log(error));
        };
        getEvents();
    }, [eventId]);
    return [events];
};

export default useEventDetail;
