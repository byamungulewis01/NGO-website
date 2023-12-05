import React, { useEffect } from "react";
import Background from "../sections/Background";
import { Link } from "react-router-dom";

function GetInvolved() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Get Involved - Glorious United";
  }, []);
  const text = "Get Involved"; // Define the text
  const imageUrl = "assets/img/background-3.jpg"; // Define the image URL
  return (
    <>
      <Background text={text} imageUrl={imageUrl} />
      <section className="bg-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 pe-lg-3">
              <img
                className="rounded-3 img-fluid"
                src="assets/img/sponsor.JPG"
                alt="sponsor"
              />
            </div>
            <div
              className="col-lg-6 px-lg-5 mt-6 mt-lg-0"
              data-zanim-timeline="{}"
              data-zanim-trigger="scroll"
            >
              <div className="overflow-hidden">
                <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                  <h5 className="fs-0 fs-lg-4 text-info">Sponsor</h5>
                  <p className="mt-3">
                    You can pledge to contribute a fee to support one individual
                    woman in our programs. Your support will provide the tools
                    and resources your sister needs to rebuild her life. You’ll
                    give an out-of-school girl or teen mother a chance to resume
                    her classes and receive vocational and business skills
                    training that can change her life. Your generous support,
                    you will instil hope for the future in a woman and in return
                    for your kindness, you’ll receive regular updates via email
                    about her progress.
                  </p>
                  <button
                    className="btn-info btn mt-2"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    Sponsor Today
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div
              className="col-lg-6 px-lg-5 mt-6 mt-lg-0"
              data-zanim-timeline="{}"
              data-zanim-trigger="scroll"
            >
              <div className="overflow-hidden">
                <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                  <h5 className="fs-0 fs-lg-4 text-info">Volunteer</h5>
                  <p className="mt-3">
                    You can get involved in the work that we do by giving us
                    your time and talents. We value the contribution of our
                    volunteers and the impact they make with us. As a volunteer
                    at GURD-Rwanda , you will have the opportunity to use and
                    enhance your personal and professional skills and perhaps
                    gain valuable experience that will help you in the future
                    while making a difference in your community.
                  </p>
                  <Link target="black" to="https://forms.gle/b2bywzpQdGyNMRLm9"
                    className="btn-info btn mt-2"
                    aria-controls="offcanvasRight"
                  >
                    Join Us Today
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-3">
              <img
                className="rounded-3 img-fluid"
                src="assets/img/16.JPG"
                alt="sponsor"
              />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;
