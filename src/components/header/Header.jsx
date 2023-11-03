import React from 'react'
import NavigationBar from './NavigationBar.jsx'

function Header() {
  return (
    <section className="header_area">
        <NavigationBar />
    

    {/* header navbar */}
    <div id="home" className="header_hero d-lg-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header_hero_content mt-45">
              <h2 className="header_title">
                You are using <span>Free</span> lite version
              </h2>
              <p>
                Please, consider purchasing full version of the template to
                get all sections, features and permission to remove footer
                credit
              </p>
              <a
                href="https://uideck.com/templates/producto/"
                className="main-btn"
              >
                Purchase
              </a>
            </div>{" "}
            {/* header hero content */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
      <div
        className="header_shape bg_cover d-none d-lg-block"
        style={{ backgroundImage: "url(assets/images/header_shape.png)" }}
      />{" "}
      {/* header shape */}
      <div className="header_image d-flex align-items-center">
        <div className="image">
          <img src="assets/images/header_image.png" alt="header image" />
          <img src="assets/images/dots.svg" alt="dots" className="dots" />
        </div>{" "}
        {/* image */}
      </div>{" "}
      {/* header image */}
    </div>{" "}
    {/* header hero */}
  </section>
  )
}

export default Header