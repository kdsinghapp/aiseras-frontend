import React from "react";
import img1 from "../assets/assets/img/logo/logo.png";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-testting-wrap">
        <header className="header">
          <div className="container-fluid">
            <div className="header-testting-inner d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="header-item item-left">
                <div className="logo-menu">
                  <a href="index.html" className="logo d-xl-block">
                    <img src={img1} alt="logo" style={{ width: 150 }} />
                  </a>
                </div>
              </div>
              {/* Menu Start */}
              <div className="header-item">
                <div className="menu-overlay" />
                <nav className="menu">
                  {/* Mobile Menu Head */}
                  <div className="mobile-menu-head">
                    <div className="go-back">
                      <i className="material-symbols-outlined">
                        arrow_back_ios
                      </i>
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close">×</div>
                  </div>
                  {/* Mian Menu */}
                  <ul className="menu-main">
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className="menu-mitem d-flex align-items-center"
                      >
                        Home
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className="menu-mitem d-flex align-items-center"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className="menu-mitem d-flex align-items-center"
                      >
                        Services
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="#"
                        className="menu-mitem d-flex align-items-center"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Menu End */}
              <div className="header-item item-righ d-flex align-items-center justify-content-center">
                <div className="menu__components">
                  <a
                    href="javascript:void(0)"
                    className="text-white border-right me-3 d-xl-block d-none"
                  >
                    (+62 123 4567 980)
                  </a>
                  <div className="border-right me-3 d-xl-block d-none">
                    <a href="help.html">Help Center</a>
                  </div>
                  <a href="signup.html" className="cmn--btn">
                    <span>Sign Up</span>
                  </a>
                </div>
                {/* Mobile Menu Tigger */}
                <div className="mobile-menu-trigger">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
