import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="text-center py-0">
      <div
        className="bg-holder overlay overlay-elixir"
      />
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row min-vh-100 align-items-center text-white">
          <div
            className="col"
            data-zanim-timeline="{}"
            data-zanim-trigger="scroll"
          >
           
            <h5
              className="text-uppercase mt-5 ls text-white fs-0 fs-md-1"
              data-zanim-xs='{"delay":0.2}'
            >
              oops! page not found
            </h5>
            <h1
              className="fs-4 fs-sm-6 fs-md-8 text-white"
              data-zanim-xs='{"delay":0.3}'
            >
              404
            </h1>
            <div data-zanim-xs='{"delay":0.4}'>
              <Link
                className="btn btn-lg btn-warning rounded-pill mt-4"
                to="/"
              >
                Take Me Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
}

export default NotFound;
