import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row p-5 border-top text-center">
        <h1>People</h1>
      </div>

      {/* Profile Section */}
      <div
        className="row text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "16px" }}
      >
        {/* Image Column */}
        <div className="col-lg-6 col-md-12 text-center p-5">
          <img
            src="media/images/nishi.jpg"
            alt="Nishita Mishra"
            className="rounded-circle img-fluid"
            style={{ width: "60%", maxWidth: "250px" }}
          />
          <h5 className="mt-4">Nishita Mishra</h5>
          <h6 className="text-primary">Founder, CEO</h6>
        </div>

        {/* Text Column */}
        <div className="col-lg-6 col-md-12 p-5">
          <p>
            Nishita bootstrapped and founded StockFlow in 2026 to overcome the
            hurdles she faced during her decade-long stint as a trader. Today,
            StockFlow has changed the landscape of the Indian broking industry.
          </p>
          <p>
            She is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing Badminton is her zen.</p>
          <p>
            Connect on:{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-primary fw-bold"
              onClick={() => window.open("https://example.com", "_blank")}
            >
              Homepage
            </button>{" "}
            |{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-primary fw-bold"
              onClick={() => window.open("https://tradingqna.com", "_blank")}
            >
              TradingQnA
            </button>{" "}
            |{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-primary fw-bold"
              onClick={() => window.open("https://twitter.com/", "_blank")}
            >
              Twitter
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
