import React, { useEffect, useState } from 'react';
import './Home.css';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then((res) => res.json())
            .then((data) => {
                if (search) {
                    const searchedEvent = data.filter((event) => event.name.toLowerCase().includes(search));
                    setEvents(searchedEvent);
                } else {
                    setEvents(data);
                }
            });
    }, [search]);
    return (
        <div className="container">
            <h3 className="text-center fw-bolder mt-5">I GROW BY HELPING PEOPLE IN NEED.</h3>

            <div className="d-flex justify-content-center">
                <form className="d-flex justify-content-center search-container" role="search">
                    <input onChange={(e) => setSearch(e.target.value)} className="form-control search-field" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-btn bg-primary text-white border border-0 rounded-end-3 px-3" type="submit">
                        <span className="">Search</span>
                    </button>
                </form>
            </div>
            <div className="row row-gap-4 mt-4">
                {events.map((event) => (
                    <div className="col-12 col-md-4 col-lg-3 justify-content-center d-flex">
                        <Event key={event._id} event={event}></Event>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
