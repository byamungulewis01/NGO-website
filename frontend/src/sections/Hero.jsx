import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-0">
      <div
        className="swiper theme-slider min-vh-100"
        data-swiper='{"loop":true,"allowTouchMove":false,"autoplay":{"delay":5000},"effect":"fade","speed":800}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-zanim-timeline="{}">
            <div
              className="bg-holder"
              style={{ backgroundImage: "url(assets/img/header-1.jpg)" }}
            />
            {/*/.bg-holder*/}
            <div className="container">
              <div
                className="row min-vh-100 py-8 align-items-center"
                data-inertia='{"weight":1.5}'
              >
                <div className="col-sm-8 col-lg-10 px-5 px-sm-3">
                  <div className="overflow-hidden">
                    <h3
                      className="fs-3 text-white"
                      data-zanim-xs='{"delay":0.1}'
                    >
                      GLorious United For Rural Development
                    </h3>
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="text-white pt-4 fs-1 fs-md-1 lh-xs"
                      data-zanim-xs='{"delay":0.1}'
                    >
                      Investing in education, leadership, and life skills for
                      girls and women to ensure strong, healthy and educated
                      people in rural communities who will contribute to the
                      healthy families, communities, and sustainable
                      economic growth.{" "}
                    </p>
                  </div>

                  <div className="overflow-hidden">
                    <div data-zanim-xs='{"delay":0.2}'>
                      <button
                        className="btn btn-primary me-3 mt-3"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        Donate
                        <span className="fas fa-chevron-right ms-2" />
                      </button>
                      <Link className="btn btn-warning mt-3" to="/get-involved">
                        Get Involved
                        <span className="fas fa-chevron-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
