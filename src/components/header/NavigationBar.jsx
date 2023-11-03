import React from 'react'
import Logo from '../../assets/img/ons-icon-bsl-large.png'

function NavigationBar() {
  return (
    <div className="header_navbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-slate-900">
              <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="Logo" className=' w-[2cm]' />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#video">
                      Tutorial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* navbar collapse */}
            </nav>
            {/* navbar */}
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </div>
  )
}

export default NavigationBar