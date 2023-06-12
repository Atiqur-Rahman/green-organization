import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h3 className="text-center fw-bolder mt-5">I GROW BY HELPING PEOPLE IN NEED.</h3>

            <div className="d-flex justify-content-center">
                <form className="d-flex justify-content-center search-container" role="search">
                    <input className="form-control search-field" type="search" placeholder="Search" aria-label="Search" />
                    <button className="search-btn bg-primary text-white border border-0 rounded-end-3" type="submit">
                        <span className="">Search</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
