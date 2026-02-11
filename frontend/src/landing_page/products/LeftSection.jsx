import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
       <div className="container mt-5">
        <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 col-sm-12 text-center">
                <img src={imageURL} alt={productName} style={{ width: "100%", maxWidth: "500px" }} />
            </div>

            {/* Content Section */}
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-start">
                <h1 className='text-muted'>{productName}</h1>
                <p className='text-muted'>{productDescription}</p>

                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                    <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={tryDemo ? () => window.open(tryDemo, '_blank') : () => alert('Demo not available')}
                        style={{ textDecoration: "none" }}
                    >
                        Try Demo <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={learnMore ? () => window.open(learnMore, '_blank') : () => alert('Learn More not available')}
                        style={{ textDecoration: "none" }}
                    >
                        Learn More <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>

                <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3">
                    {googlePlay ? (
                        <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ maxWidth: "120px" }} />
                        </a>
                    ) : null}
                    {appStore ? (
                        <a href={appStore} target="_blank" rel="noopener noreferrer">
                            <img src="media/images/appstoreBadge.svg" alt="App Store" style={{ maxWidth: "120px" }} />
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
       </div>
    );
}

export default LeftSection;
