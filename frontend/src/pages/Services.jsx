import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "What We Do - Glorious United";
  }, []);
  const text = "What We Do"; // Define the text
  const imageUrl = "assets/img/background-2.jpg"; // Define the image URL

  return (
    <>
      <section className="bg-primary py-3 mt-5">
        <div className="container bg-primary">
          <div className="row" data-inertia='{"weight":1.5}'>
            <div
              className="col-md-6 text-white"
              data-zanim-timeline="{}"
              data-zanim-trigger="scroll"
            >
              <div className="overflow-hidden">
                <h1
                  className="text-white fs-4 fs-md-5 mb-0 lh-1"
                  data-zanim-xs='{"delay":0}'
                >
                  {text}
                </h1>
                <div
                  className="nav"
                  aria-label="breadcrumb"
                  role="navigation"
                  data-zanim-xs='{"delay":0.1}'
                  style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                >
                  <ol className="breadcrumb fs-1 ps-0 fw-bold">
                    <li className="breadcrumb-item">
                      <span className="text-warning">
                        GURD-Rwanda has 4 programs
                      </span>{" "}
                      <br />
                      <span className="text-white">
                        1.Sexual reproductive health and rights
                      </span>{" "}
                      <br />
                      <span className="text-white">
                        2.Education Outcomes
                      </span>{" "}
                      <br />
                      <span className="text-white">
                        3.Youth development and Entrepreneurship
                      </span>{" "}
                      <br />
                      <span className="text-white">
                        4.Building Rural Youth capacity
                      </span>{" "}
                      <br />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-100 py-4">
        <div className="container">
          <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div
              className="col-lg-6 py-3 py-lg-0 mb-0 position-relative"
              style={{ minHeight: 400 }}
            >
              <div
                className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0"
                style={{ backgroundImage: "url(assets/img/15.JPG)" }}
              />
              {/*/.bg-holder*/}
            </div>
            <div className="col-lg-6 px-3 py-3 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg rounded-lg-be-0 rounded-lg-te-lg ">
              <div className="elixir-caret d-none d-lg-block" />
              <div className="d-flex align-items-center">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>
                      Sexual reproductive health and rights
                    </h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mb-3" data-zanim-xs='{"delay":0.1}'>
                      GURD-Rwanda focuses on improving knowledge, access to
                      Sexual Reproductive Health and Rights (SRHR) information
                      and services, the prevention and response of Sexual and
                      Gender-based Violence. (SGBV)
                    </p>
                    <ol>
                      <li>
                        Carrying out health education on sexual and reproductive
                        health and rights in teenager schools;
                      </li>
                      <li>
                        {" "}
                        Menstrual health awareness; we equip young people and
                        teen mothers with knowlegde and skills about all body
                        changes during puberty and beyond as well as tools to
                        promote proper menstrual health management.
                      </li>
                      <li>
                        SGBV Prevention and Response: we strive to eensure every
                        girl and teen mother is free from Sexual and Gender
                        Based Violence. We raise awareness on the prevention and
                        response of this growing issue
                      </li>
                      <li>
                        Initiating Girls lead club with programs targeted to
                        developing girls’ agency (Goal setting; Self-esteem;
                        problem solving; perseverance; decision making,
                        communication skills and Self-awareness.)
                      </li>
                    </ol>
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
            <div className="col-lg-6 p-3 py-3 p-4 my-lg-0 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg  rounded-lg-be-0">
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
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      GURD-Rwanda believes in the power of educating girls.
                      Studies have shown again and again the economic and health
                      benefits to providing girls with primary, secondary, and
                      higher education.
                    </p>
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      When educated girls become women they are able to make
                      more informed decisions about their future and the futures
                      of their families and communities. By supporting the
                      empowerment of women we believe that the world will become
                      a more stable and prosperous place.
                    </p>
                    {/* <p className="mt-3" data-zanim-xs='{"delay":0.1}'> */}
                    <ol>
                      <li>
                        ICYIZERE Project (Hope Project): Counselling teen
                        mothers and support them to catch up with their studies
                        or joining Vocational training centre.
                      </li>
                      <li>
                        Supporting poor teenagers by paying for them School fees
                        and providing hygienic kits and school materials to
                        them.
                      </li>
                    </ol>
                    {/* </p> */}
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
                style={{ backgroundImage: "url(assets/img/19.JPG)" }}
              />
              {/*/.bg-holder*/}
            </div>
            <div className="col-lg-6 p-3 py-3 p-4 my-lg-0 bg-white rounded-bs-lg rounded-lg-bs-0 rounded-be-lg  rounded-lg-be-0">
              <div className="elixir-caret d-none d-lg-block" />
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>
                      Building Rural Youth capacity
                    </h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}'>
                      Mission Statement is to ensure a healthy, strong and
                      educated breed of young people from rural communities
                      through advocacy, and capacity building programs to put
                      them on par with other young people across the globe.
                    </p>

                    <ol>
                      <li>
                        Civil education empowers rural youth to create positive
                        change.
                      </li>
                      <li>
                        Advocacy is a key tool for empowering rural youth to
                        shape their own futures.
                      </li>
                      <li>
                        {" "}
                        By prioritizing SDGs programs, NGOs can help rural youth
                        build a better future for themselves and their
                        communities.
                      </li>
                      <li>
                        We prioritize health awareness to promote better health
                        outcomes for rural youth and their communities.
                      </li>
                    </ol>
                  </div>
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

export default Services;
