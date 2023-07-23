import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" text-white pt-3 mt-5 rounded" style={{ backgroundColor: 'navy' }}>
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-3 font-weight-bold text-success">Organization</h5>
                            <p>Advertise with us</p>
                        </div>
                        {/* <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Prouduct</h5>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                        </div> */}
                        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-white" style={{ textDecoration: 'none' }}>
                                    Bootstrap 5
                                </a>
                            </p>
                        </div> */}
                        <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-3 font-weight-bold text-success">Contact</h5>
                            <p>
                                <i className="fas fa-home mr-3"></i> 1234 Somewhere Road, Gulshan, Dhaka, Bangladesh
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> rahmanatique88@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> +8801705565342
                            </p>
                            <p>
                                <i className="fas fa-print mr-3"></i> +8801705565342
                            </p>
                        </div>
                    </div>
                    <hr className="mb-3" />
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <p>
                                Copyright &copy;2023 All rights reserved by:
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <strong className="text-success "> Green Organization</strong>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="text-center">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                                            <i className="fab fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
