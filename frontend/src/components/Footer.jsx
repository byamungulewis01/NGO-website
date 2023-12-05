import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="py-4" style={{ backgroundColor: "#3D4C6F" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="bg-primary text-white p-5 p-lg-6 rounded-3">
                <h4 className="text-white fs-1 fs-lg-2 mb-1">
                  Make a Difference. Become a Monthly Donor Today.
                </h4>
                <div className="row mt-3 align-items-center">
                  <div className="col-md-5 mt-3 mt-md-0">
                    <div className="d-grid">
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <span className="text-primary fw-semi-bold">
                          Donate
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="col-md-7 mt-3 mt-md-0">
                    <div className="d-grid">
                      <Link
                        to="/get-involved"
                        className="btn btn-info"
                        type="submit"
                      >
                        <span className="text-white fw-semi-bold">
                          Get Involve
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 align-items-center"></div>
              </div>
            </div>
            <div className="col-lg-6 mt-0 mt-lg-0">
              <div className="row">
                <div className="col-md-5 text-white ms-lg-auto">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        target="blank"
                        href="https://rw.linkedin.com/in/gurd-rwanda-419418218"
                      >
                        {" "}
                        <span className="brand-icon me-3">
                          <span className="fab fa-linkedin-in" />
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Linkedin
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        target="blank"
                        href="http://twitter.com/GurdRwanda"
                      >
                        {" "}
                        <span className="brand-icon me-3">
                          <span className="fab fa-twitter" />
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Twitter
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        target="blank"
                        href="http://web.facebook.com/GURD-Rwanda/"
                      >
                        {" "}
                        <span className="brand-icon me-3">
                          <span className="fab fa-facebook-f" />
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Facebook
                        </h5>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a
                        className="text-decoration-none d-flex align-items-center"
                        target="blank"
                        href="http://www.instagram.com/gurd_rwanda/"
                      >
                        {" "}
                        <span className="brand-icon me-3">
                          <span className="fab fa-instagram" />
                        </span>
                        <h5 className="fs-0 text-white mb-0 d-inline-block">
                          Instagram
                        </h5>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 ms-sm-auto text-white">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-phone-square" /> &nbsp;+250788782246 / +250781395058 
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-envelope-square" />
                      &nbsp; gurdorganisation@gmail.com
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-map-marker-alt" /> &nbsp; Po.Box : 72 Nyamasheke
                    </li>
                    <li>
                      <i className="fas fa-business-time" /> &nbsp; Mon. - Fri.
                      8AM - 5PM{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

         <div className="row text-white mt-5 text-center">
        <span>
        © Copyright {new Date().getFullYear()} Glorious United  - All Rights Reserved.
        </span>
         </div>
        </div>
      </section>

    </>
  );
}

export default Footer;
