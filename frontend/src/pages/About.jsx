import React, { useEffect, useState } from "react";
import Background from "../sections/Background";
import Team from "../sections/Team";
import axios from "../api";
import Loading from "../Loading";
import { Link } from "react-router-dom";

function About() {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Who We Are - Glorious United";
    axios
      .get("/leadership")
      .then((response) => {
        // console.log(response.data);
        setMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const text = "Who We are"; // Define the text
  const imageUrl = "assets/img/background-2.jpg"; // Define the image URL

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <Background text={text} imageUrl={imageUrl} />
        <section className="bg-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pe-lg-3">
                <img
                  className="rounded-3 img-fluid"
                  src="assets/img/why-choose-us-1.jpg"
                  alt="about"
                />
              </div>
              <div
                className="col-lg-6 px-lg-5 mt-6 mt-lg-0"
                data-zanim-timeline="{}"
                data-zanim-trigger="scroll"
              >
                <div className="overflow-hidden">
                  <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                    <h5 className="fs-0 fs-lg-1">Mission of GURD</h5>
                    <p className="mt-3">
                      We aim to support Girls and women by empowering them with
                      knowledge and skills in sexual reproductive health,
                      equipping them to navigate life's challenges, and
                      providing counseling and socio-economic opportunities. We
                      also focus on gender based violence prevention and
                      response, (SGBV) as well as improving girls'
                      educational outcomes.
                      <br />
                      <br />
                      Through these initiatives, we hope to help young people
                      achieve their full potential and create a brighter future
                      for themselves and their communities.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    className="px-4 px-sm-0 mt-2"
                    data-zanim-xs='{"delay":0}'
                  >
                    <h5 className="fs-0 fs-lg-1">GURD's Vision</h5>
                    <p className="mt-3">
                      “Attaining sustainable and transformative change for young
                      people in rural communities”.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div
                    className="px-4 px-sm-0 mt-2"
                    data-zanim-xs='{"delay":0}'
                  >
                    <h5 className="fs-0 fs-lg-1">Our Values</h5>
                    <p className="mt-3">
                      • Commitment • Diversity and Inclusion • Collaboration{" "}
                      <br /> • Collective Care • Creativity and Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col">
                <h3 className="text-center fs-2 fs-md-3">OUR STORY</h3>
                <hr
                  className="short"
                  data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
                  data-zanim-trigger="scroll"
                />
              </div>
              <div className="col-12">
                <div className="bg-white px-3 px-0 py-5 px-lg-5 rounded-3">
                  <h5>Glorious United for Rural Development (GURD)</h5>
                  <p className="mt-3">
                    Glorious United for Rural Development (GURD) is a non-profit
                    organization that was founded in 2020 by Fidele, with the
                    mission to improve the lives of vulnerable youth and
                    teenagers in rural areas. In addition to Fidele , 13 other
                    individuals joined him to establish GURD, all of whom were
                    passionate about improving the lives of young people in
                    rural areas.
                  </p>
                  <p className="mt-3">
                    Through its education, health, and community development
                    initiatives, GURD aims to address issues like unplanned
                    pregnancy among young people, poverty-related school
                    dropout, and lack of life skills among young people/
                    teenagers.
                  </p>
                  <p className="mt-3">
                    The organization is committed to transforming the lives of
                    young people and empowering them to reach their full
                    potential.
                  </p>
                  <Link className="btn-danger btn btn-sm" to="/meet-founder">
                    Meet The Founder
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Team members={members} />;
      </div>
    </>
  );
}

export default About;
