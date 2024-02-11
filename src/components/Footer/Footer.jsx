import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-one">
        <div className="container">
          <div className="footer-one__header">
            <div className="footer-one__header__logo">
              <Link>
                <img src="assets/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="footer-one__header__newsletter">
              <span>Subscribe Newletter:</span>
              <div className="footer-one-newsletter">
                <div className="subscribe-form">
                  <div className="mc-form">
                    <input type="text" placeholder="Enter your email" />
                    <button className="btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-one__header__social">
              <div className="social-icons -border">
                <ul>
                  <li>
                    <Link
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-instagram"> </i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ color: "undefined" }}
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-one__body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer__section -info">
                  <h5 className="footer-title">Contact info</h5>
                  <p>
                    Address:
                    <span>2168 S Archer Ave, Chicago, IL 60616, US</span>
                  </p>
                  <p>
                    Phone:<span>+1 312-808-1999</span>
                  </p>
                  <p>
                    Email:<span>Beatycosmetics@gmail.com</span>
                  </p>
                  <p>
                    Opentime:<span>8.00am - 11.00.pm</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer__section -links">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h5 className="footer-title">Account</h5>
                      <ul>
                        <li>
                          <Link>My account</Link>
                        </li>
                        <li>
                          <Link>Wishlist</Link>
                        </li>
                        <li>
                          <Link>Cart</Link>
                        </li>
                        <li>
                          <Link>Shop</Link>
                        </li>
                        <li>
                          <Link >Checkout</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-6">
                      <h5 className="footer-title">Infomation</h5>
                      <ul>
                        <li>
                          <Link >About us</Link>
                        </li>
                        <li>
                          <Link >Careers</Link>
                        </li>
                        <li>
                          <Link >Delivery Information</Link>
                        </li>
                        <li>
                          <Link >Privacy Policy</Link>
                        </li>
                        <li>
                          <Link >Terms &amp; Condition</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="footer__section -payment">
                  <h5 className="footer-title">Payment methods</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    gravida facilisis.
                  </p>
                  <div className="payment-methods">
                    <img
                      src="assets/images/footer/payment.png"
                      alt="Payment methods"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-one__footer">
          <div className="container">
            <div className="footer-one__footer__wrapper">
              <p>© Copyright 2020 Beauty</p>
              <ul>
                <li>
                  <Link >Privacy Policy</Link>
                </li>
                <li>
                  <Link >Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link >Site map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
