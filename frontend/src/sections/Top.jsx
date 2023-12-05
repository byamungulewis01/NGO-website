import React from 'react'

function Top() {
  return (
    <div className="bg-primary py-3 d-none d-sm-block text-white fw-bold">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-auto d-none d-lg-block fs--1">
              <span
                className="fas fa-map-marker-alt text-warning me-2"
                data-fa-transform="grow-3"
              />
              Po.Box : 72 Nyamasheke.{" "}
            </div>
            <div className="col-auto ms-md-auto order-md-2 d-none d-sm-flex fs--1 align-items-center">
              <span
                className="fas fa-clock text-warning me-2"
                data-fa-transform="grow-3"
              />
              Mon-Sat, 8:00-17:00. Friday CLOSED
            </div>
            <div className="col-auto">
              <span
                className="fas fa-phone-alt text-warning"
                data-fa-transform="shrink-3"
              />
              <a
                className="ms-2 fs--1 d-inline text-white fw-bold"
                href="tel:0788782246"
              >
                0788782246, 0781395058
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Top