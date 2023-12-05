import React from "react";

function Team({ members }) {
  var url = import.meta.env.VITE_API_STATIC_FILES_URL +'/uploads/';

  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="fs-2 fs-md-3">Our Team Members</h3>
          <hr
            className="short"
            data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
            data-zanim-trigger="scroll"
          />
        </div>
        <div className="row">
          {members.map((member, index) => (
            <div key={member.id} className="col-sm-6 col-lg-3 mt-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={url + member.image}
                  alt="Ragner Lothbrok"
                />
                <div
                  className="card-body"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>{member.name}</h5>
                  </div>
                  <div className="overflow-hidden">
                    <h6
                      className="fw-normal text-500"
                      data-zanim-xs='{"delay":0.1}'
                    >
                     {member.post}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
