import React from "react";

function Sponser({sponsers}) {
  var url = import.meta.env.VITE_API_STATIC_FILES_URL +'/uploads/';
  return (
    <>
      <div className="bg-200 py-6">
        <div className="container">
        <div className="row">
            <h3 className="text-center">OUR PARTNERS</h3>
        </div>
          <div className="row d-flex justify-content-center" data-zanim-timeline="{}">
          {sponsers.map((sponser, index) => (
            <div key={sponser.id} className="col-4 col-md-2 my-3 overflow-hidden">
              <img
                className="img-fluid"
                src={url + sponser.image}
                alt="partnerco"
                data-zanim-xs="{}"
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              />
            </div>
           ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponser;
