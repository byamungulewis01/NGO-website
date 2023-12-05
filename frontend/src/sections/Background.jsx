import React from "react";

function Background({ text, imageUrl,description }) {
  return (
    <section>
      <div
        className="bg-holder overlay"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center bottom",
        }}
      />
      <div className="container">
        <div className="row" data-inertia='{"weight":1.5}'>
          <div
            className="col-md-12 text-white"
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
                    <span className="text-white">{description}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;
