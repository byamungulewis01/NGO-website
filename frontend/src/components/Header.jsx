import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Link, NavLink } from "react-router-dom";
import Top from "../sections/Top";

function Header() {
 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      amount: '', // Updated dynamically when a donation button is clicked
      message: '',
    });



  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle donation button click
    const handleDonationClick = (amount) => {
      setFormData({
        ...formData,
        amount: amount.toString(), // Convert to string to match the input type
      });
    };


    const config = {
      public_key: import.meta.env.VITE_FLUTTER_PUBLIC_KEY,
      tx_ref: Date.now(),
      amount: formData.amount,
      currency: 'USD',
      payment_options: 'card,mobilemoney,ussd',
      // type : 'mobile_money_rwanda',
      customer: {
        email: formData.email,
         phone_number: formData.phone,
        name: formData.name,
      },
      customizations: {
        title: 'Payment Integration',
        description: 'Payment ',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
  
    const handleFlutterPayment = useFlutterwave(config);
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleFlutterPayment({
        callback: (response) => {
           
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
          history.back();
        },
      });
      // console.log(formData);
    };
  return (
    <>
      <Top />
      <div className="sticky-top navbar-elixir bg-white">
        <div className="container ">
          <nav className="navbar navbar-expand-lg">
            {" "}
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/glorius.png" alt="logo" />
            </Link>
            <button
              className="navbar-toggler p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNavbarCollapse"
              aria-controls="primaryNavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger hamburger--emphatic">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="primaryNavbarCollapse"
            >
              <ul className="navbar-nav py-3 py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" role="button">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/about-us" role="button">
                    Who We Are
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/what-we-do" role="button">
                    What We Do
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/get-involved" role="button">
                    Get Involved
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/news" role="button">
                    News
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/contact-us" role="button">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Link
                className="btn btn-outline-danger rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Donation Form</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
        />
        
      </div>

      {/* Other form elements... */}

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          How much would you like to donate?
        </label>
        <div className="d-flex justify-content-between">
          {[20, 25 ,50, 100].map((amount) => (
            <button
             type="button"
              key={amount}
              className="btn-outline-primary btn btn-sm mb-3"
              onClick={() => handleDonationClick(amount)}
            >
              $ {amount}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          {[250, 500 ,750, 1000].map((amount) => (
            <button
             type="button"
              key={amount}
              className="btn-outline-primary btn btn-sm"
              onClick={() => handleDonationClick(amount)}
            >
              $ {amount}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <input
          type="number"
          min={0}
          className="form-control"
          id="amount"
          name="amount"
          placeholder="Enter amount"
          required
          value={formData.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
                placeholder="Enter your message"
                defaultValue={formData.message}
                onChange={handleInputChange}
              />
            </div>

      {/* Other form elements... */}

      <button type="submit" className="btn btn-primary">
        Donate
      </button>
    </form>
   
        </div>
      </div>
    </>
  );
}

export default Header;
