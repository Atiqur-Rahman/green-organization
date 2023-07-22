import React, { useEffect, useState } from 'react';
import './Home.css';
import Event from '../Event/Event';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);

    useEffect(() => {
        const getEvents = async () => {
            await fetch(`https://green-organization-server.vercel.app/event?page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                    if (search) {
                        const searchedEvent = data.filter((event) => event.name.toLowerCase().includes(search));
                        setEvents(searchedEvent);
                    } else {
                        setEvents(data);
                    }
                })
                .catch((error) => console.log(error));
        };
        getEvents();

        const getPageCount = async () => {
            await fetch('https://green-organization-server.vercel.app/eventscount')
                .then((res) => res.json())
                .then((data) => {
                    const count = Math.ceil(data.count / 8);
                    setPageCount(count);
                })
                .catch((error) => console.log(error));
        };
        getPageCount();
    }, [search, page, size]);

    return (
        <div className="container my-5">
            <h3 className="text-center fw-bolder mt-5">I GROW BY HELPING PEOPLE IN NEED.</h3>

            <div className="d-flex justify-content-center">
                <form className="d-flex justify-content-center search-container" role="search">
                    <input onChange={(e) => setSearch(e.target.value)} className="form-control search-field" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-btn bg-primary text-white border border-0 rounded-end-3 px-3" type="submit">
                        <span className="">Search</span>
                    </button>
                </form>
            </div>
            <div className="row row-gap-4 mt-4 mb-3">
                {events.map((event) => (
                    <div className="col-12 col-md-4 col-lg-3 justify-content-center d-flex">
                        <Event key={event._id} event={event}></Event>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[...Array(pageCount).keys()].map((number) => (
                    <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>
                        {number + 1}
                    </button>
                ))}
                <select className="ms-4" onChange={(e) => setSize(e.target.value)}>
                    <option value="4">4</option>
                    <option value="8" selected>
                        8
                    </option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
