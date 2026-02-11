import React from 'react';

function Footer() {
    return ( 
       <div className="container mt-5 border-top bg-light">
            <div className="row mt-5 text-center text-md-start">
                <div className="col-md-3 mb-4">
                    <img src="media/images/logoStockFlow.png" className="img-fluid rounded-circle" alt="StockFlow Logo" />
                    <p>&copy; 2025 - 2026, STOCKFLOW Broking Ltd. All rights reserved.</p>
                </div>

                <div className="col-md-3 mb-4">
                    <p><strong>Company</strong></p>
                    {['About', 'Products', 'Pricing', 'Referral programme', 'Careers', 'StockFlow.tech', 'Open source', 'Press & media', 'StockFlow Cares (CSR)'].map((item, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className="btn btn-link p-0 d-block text-start"
                            onClick={() => alert(`${item} page not linked yet`)}
                            style={{ textDecoration: 'none' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="col-md-3 mb-4">
                    <p><strong>Support</strong></p>
                    {['Contact us', 'Support portal', 'Z-Connect blog', 'List of charges', 'Downloads & resources', 'Videos', 'Market overview', 'How to file a complaint?', 'Status of your complaints'].map((item, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className="btn btn-link p-0 d-block text-start"
                            onClick={() => alert(`${item} page not linked yet`)}
                            style={{ textDecoration: 'none' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="col-md-3 mb-4">
                    <p><strong>Account</strong></p>
                    {['Open an account', 'Fund transfer'].map((item, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className="btn btn-link p-0 d-block text-start"
                            onClick={() => alert(`${item} page not linked yet`)}
                            style={{ textDecoration: 'none' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className='mt-5 text-small text-muted' style={{ fontSize: "14px" }}>
                <p>StockFlow Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StockFlow Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through StockFlow Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: StockFlow Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.</p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            </div>
       </div>
    );
}

export default Footer;
