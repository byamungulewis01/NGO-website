import React, { useEffect } from "react";

function Founder() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Meet Founder - Glorious United";
  }, []);

  return (
    <>
      <section className="bg-100">
        <div className="container">
          <div className="row mt-4 g-0">
            <div
              className="col-lg-4 py-3 py-lg-0 position-relative"
              style={{ minHeight: 400, backgroundPosition: "top" }}
            >
              <div
                className="bg-holder rounded-ts-lg rounded-lg-bs-lg rounded-te-lg rounded-lg-te-0"
                style={{
                  backgroundImage: "url(../assets/img/ceo2.jpg)",
                }}
              />
            </div>
            <div className="col-lg-8 px-4 py-4 my-lg-0 bg-white rounded-lg-te-lg rounded-be-lg rounded-bs-lg rounded-lg-bs-0 d-flex align-items-center">
              <div data-zanim-timeline="{}">
                <h5
                  data-zanim-xs='{"delay":0}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  TUYISHIME Fidèle
                </h5>
                <p
                  className="my-0"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Fidèle, the founder of GURD-Rwanda, is a passionate advocate
                  for education and empowerment of rural youth and teenagers.
                  The idea behind GURD-Rwanda began in 2014, when Fidèle, the
                  organization's founder, was working as a teacher and saw
                  first-hand the devastating effects of unplanned pregnancies,
                  child marriage, and poverty on young people's education.
                  Drawing from his 8 years of experience working in education at
                  the grassroots level, Fidèle was motivated to launch GURD to
                  promote health education and combat sexual and gender-based
                  violence (SGBV).{" "}
                </p>
                <p
                  className="mt-3"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  Over the years, Fidèle saw the problem of teen pregnancy and
                  dropout rates in rural communities become more and more
                  severe. He was moved to action and developed a plan to support
                  young girls to empower themselves and overcome the challenges
                  they faced. He recognized that a lack of accurate information
                  about reproductive health and life skills was a major
                  contributing factor to the problem. He realized that it was
                  useless for students to excel in academics but end up dropping
                  out of school due to unintended pregnancies, so he started a
                  health education program..{" "}
                </p>
              </div>
            </div>
            {/* </div>
              <div className="row mt-2 g-0"> */}
            <div className="col-lg-6 px-4 py-3 bg-white d-flex align-items-center">
              <div data-zanim-timeline="{}">
                <p
                  className="my-0"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  In 2019, Fidèle met with one of his former students who had
                  dropped out of school in 2013 after an unplanned pregnancy and
                  subsequent marriage. When they reconnected, the student told
                  Fidèle that she had since separated from her husband and was
                  struggling to support herself and her child. This encounter
                  left a profound impression on Fidèle, who realized that child
                  marriage, unplanned pregnancies, and poverty are among the
                  biggest obstacles to gender equality and girls' access to
                  education and opportunities to live a life of dignity.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 px-4 py-3 bg-white d-flex align-items-center">
              <div data-zanim-timeline="{}">
                <p
                  className="my-0"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  After his life-changing encounter with his former student,
                  Fidèle was inspired to create a more comprehensive solution to
                  the problems facing young people in his community. He
                  established a program that combined life skills, scholarship
                  opportunities, and education on sexual reproductive and
                  reproductive health and sexual gender-based violence
                  prevention and response. This program aimed to empower young
                  people with the knowledge, skills, and resources they need to
                  build successful lives and break the cycle of poverty.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-12 px-4 py-3 bg-white d-flex align-items-center">
              <div data-zanim-timeline="{}">
                <p
                  className="mb-3"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  To complement his extensive experience in the field, Fidèle
                  holds a bachelor's degree in international politics from the
                  National University of Rwanda. He attended several national
                  and International conferences, trainings and meetings that
                  have increased his sector knowledge, shaped his leadership
                  skill and expanded his network.
                </p>
                <p
                  className="my-0"
                  data-zanim-xs='{"delay":0.1}'
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  His background in education and his commitment to youth
                  empowerment led him to become Rwanda country coordinator of One
                  Africa Forum since August 2016.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Founder;
