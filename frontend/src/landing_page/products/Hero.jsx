import React from 'react';

function Hero() {
    return ( 
       <div className="container border-bottom mb-5">
            <div className="text-center mt-5 p-3">
                <h1>STOCKFLOW Products</h1>
                <h3 className='text-muted mt-4 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='text-muted mt-4 mb-5'>
                    Check out our{' '}
                    <button
                        type="button"
                        className="btn btn-link p-0 text-primary"
                        onClick={() => window.open("/products", "_self")} // replace with actual link
                        style={{ textDecoration: "none" }}
                    >
                        investment offerings <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </p>
            </div>
       </div>
     );
}

export default Hero;
