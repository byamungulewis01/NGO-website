import React, { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import axios from "../api";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import Sponser from "../sections/Sponser";

function Home() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home - Glorious United";
    axios.get("/sponsors")
    .then((response) => {
      setSponsors(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  },[]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Hero />

      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="bg-100">
        <div className="container">
          <div className="text-center mb-6">
            <h3 className="fs-2 fs-md-3">Our Programs</h3>
            <hr
              className="short"
              data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
              data-zanim-trigger="scroll"
            />
          </div>
          <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div
              className="col-lg-6 py-3 py-lg-0 mb-0 position-relative"
              style={{ minHeight: 400 }}
            >
              <div
                className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0  "
                style={{ backgroundImage: "url(assets/img/15.JPG)" }}
              />
              {/*/.bg-holder*/}
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg rounded-lg-be-0 rounded-lg-te-lg ">
              <div className="elixir-caret d-none d-lg-block" />
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>
                      Sexual reproductive health and rights
                    </h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      GURD-Rwanda focuses on improving knowledge, access to
                      Sexual Reproductive Health and Rights (SRHR) information
                      and services, the prevention and response of Sexual and
                      Gender-based Violence. (SGBV)
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div data-zanim-xs='{"delay":0.2}'>
                      <Link
                        className="d-flex align-items-center"
                        to="/what-we-do"
                      >
                        Learn More
                        <div className="overflow-hidden ms-2">
                          <span
                            className="d-inline-block"
                            data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                          >
                            ⟶
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div
              className="col-lg-6 py-3 py-lg-0 mb-0 position-relative order-lg-2"
              style={{ minHeight: 400 }}
            >
              <div
                className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0  rounded-lg-ts-0"
                style={{ backgroundImage: "url(assets/img/18.JPG)" }}
              />
              {/*/.bg-holder*/}
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg  rounded-lg-be-0">
              <div className="elixir-caret d-none d-lg-block" />
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>Education Outcomes</h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      Education is the foundation of opportunity and progress.
                      We believe that every youth deserves access to quality
                      education. By investing in our youth, we can build a
                      brighter and more prosperous future for all."
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div data-zanim-xs='{"delay":0.2}'>
                      <Link
                        className="d-flex align-items-center"
                        to="/what-we-do"
                      >
                        Learn More
                        <div className="overflow-hidden ms-2">
                          <span
                            className="d-inline-block"
                            data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                          >
                            ⟶
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div
              className="col-lg-6 py-3 py-lg-0 mb-0 position-relative"
              style={{ minHeight: 400 }}
            >
              <div
                className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0 rounded-lg-ts-0 rounded-bs-0 rounded-lg-bs-lg "
                style={{ backgroundImage: "url(assets/img/17.JPG)" }}
              />
              {/*/.bg-holder*/}
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg  ">
              <div className="elixir-caret d-none d-lg-block" />
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>
                      Youth development and Entrepreneurship
                    </h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      "Our Youth Development and Entrepreneurship program
                      empowers young people to become successful entrepreneurs
                      and leaders. Through training and mentorship, we equip
                      them with the skills and resources they need to create
                      jobs."
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div data-zanim-xs='{"delay":0.2}'>
                      <Link
                        className="d-flex align-items-center"
                        to="/what-we-do"
                      >
                        Learn More
                        <div className="overflow-hidden ms-2">
                          <span
                            className="d-inline-block"
                            data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                          >
                            ⟶
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}

      <Sponser sponsers={sponsors} />
      <section>
        <div
          className="bg-holder overlay overlay-elixir"
          style={{ backgroundImage: "url(assets/img/header-12.jpeg)" }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="d-flex">
            <div className="flex-1">
              <h2 className="text-warning fs-3 fs-lg-4">Our Impact</h2>
              <span className="text-white">
                <strong>3500</strong> Girls benefited from our programs (Girls
                are living with leadership and self-governance skills; Girls
                with self and environment beliefs; Girls with high self-esteem,
                Girls living purposeful and goal-oriented life; reduction of
                school dropouts; Menstrual health awareness among the youth;
                Increasing young people’s knowledge and skills to adopt
                protective sexual behaviors; Reduction of the rate of unwanted
                pregnancies per year at Nyamasheke district)
              </span>
              <div className="row mt-4 pe-lg-10">
                <div
                  className="overflow-hidden col-md-3"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div
                    className="fs-3 fs-lg-4 mb-0 fw-bold text-white mt-lg-5 mt-3 lh-xs"
                    data-zanim-xs='{"delay":0.1}'
                    data-countup='{"endValue":52}'
                  >
                    3500
                  </div>
                  <h6 className="fs-0 text-white" data-zanim-xs='{"delay":0.2}'>
                    Girls benefited from our programs
                  </h6>
                </div>
                <div
                  className="overflow-hidden col col-lg-3"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div
                    className="fs-3 fs-lg-4 mb-0 fw-bold text-white mt-lg-5 mt-3 lh-xs"
                    data-zanim-xs='{"delay":0.1}'
                    data-countup='{"endValue":164}'
                  >
                    15
                  </div>
                  <h6 className="fs-0 text-white" data-zanim-xs='{"delay":0.2}'>
                    Schools fees paid for students in secondary schools
                  </h6>
                </div>
                <div className="w-100 d-flex d-lg-none" />
                <div
                  className="overflow-hidden col-md-3"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div
                    className="fs-3 fs-lg-4 mb-0 fw-bold text-white mt-lg-5 mt-3 lh-xs"
                    data-zanim-xs='{"delay":0.1}'
                    data-countup='{"endValue":38}'
                  >
                    10
                  </div>
                  <h6 className="fs-0 text-white" data-zanim-xs='{"delay":0.2}'>
                    SRHR Clubs established in schools
                  </h6>
                </div>
                <div
                  className="overflow-hidden col col-lg-3"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div
                    className="fs-3 fs-lg-4 mb-0 fw-bold text-white mt-lg-5 mt-3 lh-xs"
                    data-zanim-xs='{"delay":0.1}'
                    data-countup='{"endValue":100}'
                  >
                    600
                  </div>
                  <h6 className="fs-0 text-white" data-zanim-xs='{"delay":0.2}'>
                    Provision of Hygienic pads
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
}

export default Home;
