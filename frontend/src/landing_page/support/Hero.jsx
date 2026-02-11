import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-3 d-flex justify-content-between align-items-center" id="supportWrapper">
                <h4>Support Portal</h4>
                <button className="btn btn-link text-primary p-0" type="button">
                    Track Tickets
                </button>
            </div>

            <div className="row p-5 mx-2">
                {/* Left Section */}
                <div className="col-lg-6 col-md-12 mb-4">
                    <h3 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h3>
                    <input 
                        type="search" 
                        className="form-control mt-3" 
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                    />
                    <div className="mt-3 d-flex flex-wrap gap-2">
                        <button className="btn btn-outline-primary" type="button">Track account opening</button>
                        <button className="btn btn-outline-primary" type="button">Track segment activation</button>
                        <button className="btn btn-outline-primary" type="button">Intraday margins</button>
                        <button className="btn btn-outline-primary" type="button">Kite user manual</button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 col-md-12">
                    <h3>Featured</h3>
                    <ol className="list-unstyled">
                        <li>
                            <button className="btn btn-link text-primary p-0" type="button">
                                MCX Crude option contract expiry - November 2025
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-link text-primary p-0" type="button">
                                Latest Intraday leverages and Square-off timings
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
