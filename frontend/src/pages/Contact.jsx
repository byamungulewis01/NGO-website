import React, { useEffect } from "react";
import Background from "../sections/Background";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Glorious United";
  }, []);
  const text = "Contact Us"; // Define the text
  const imageUrl = "assets/img/background-4.jpg"; // Define the image URL

  return (
    <>
      <Background text={text} imageUrl={imageUrl} />

      <section className="bg-100" id="contact">
        <div className="container">   
          <div className="card">
            <div className="card-body h-100 p-5">
              <h5 className="mb-3">Write to us</h5>
              <form>
                <div className="mb-4">
                  <input
                    className="form-control bg-white"
                    type="text"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="form-control bg-white"
                    type="email"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control bg-white"
                    rows={11}
                    placeholder="Enter your descriptions here..."
                    required="required"
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-md-lg btn-primary" type="button">
                  {" "}
                  <span className="color-white fw-600">Send Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
}

export default Contact;
