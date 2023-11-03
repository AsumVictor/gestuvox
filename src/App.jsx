
import './App.css'
import './index.css'
import SmoothScrollingAnchorLinks from './components/smoothScroll/Scroll'
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <>
    <HomeScreen />
      <>

  {/*====== FEATURES PART START ======*/}
  <section id="features" className="features_area pt-95">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-9">
          <div className="section_title text-center pb-25">
            <h4 className="title">Drone Features</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam
              nonumy eirmod tempor invidunt labore dolore magna aliquyam.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      <div className="row text-center">
        <div className="col-lg-3 col-sm-6">
          <div className="single_features mt-30">
            <i className="lni lni-camera" />
            <h5 className="title">Camera</h5>
            <p>20 MP Resolution, 4k at 60 FPS</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single_features mt-30">
            <i className="lni lni-bolt" />
            <h5 className="title">Battery Life</h5>
            <p>Up to 90 Minutes Flight Time</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single_features mt-30">
            <i className="lni lni-game" />
            <h5 className="title">Control</h5>
            <p>2 KM of Smooth Range</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single_features mt-30">
            <i className="lni lni-rocket" />
            <h5 className="title">Speed</h5>
            <p>Fly up to 30 MPH</p>
          </div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== FEATURES PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about" className="about_area pt-95">
    <div className="about_shape d-none d-lg-block">
      <img src="assets/images/about_shape.svg" alt="shape" />
    </div>{" "}
    {/* about shape */}
    <div className="about_image d-flex align-items-center align-items-center justify-content-end">
      <div className="image">
        <img src="assets/images/about.png" alt="about" />
      </div>
    </div>{" "}
    {/* about image */}
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-6">
          <div className="about_content">
            <div className="section_title pb-25">
              <h4 className="title">Overview of Drone</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod.
              </p>
            </div>
            <a href="#" className="main-btn">
              Read More
            </a>
          </div>{" "}
          {/* about content */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== ABOUT PART ENDS ======*/}
  {/*====== PRODUCT FEATURES PART START ======*/}
  <section id="product_features" className="product_features_area pt-95 ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-9">
          <div className="section_title text-center pb-25">
            <h4 className="title">Body Features</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam
              nonumy eirmod tempor invidunt labore dolore magna aliquyam.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="product_image mt-30">
            <img
              src="assets/images/product_features.png"
              alt="product features"
            />
          </div>{" "}
          {/* product image */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== PRODUCT FEATURES PART ENDS ======*/}
  {/*====== CONTACT PART START ======*/}
  <section id="contact" className="contact_area pt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact_info mt-45">
            <div className="section_title pb-15">
              <h4 className="title">Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam
                nonumy eirmod tempor invidunt labore dolore magna aliquyam.
              </p>
            </div>
            <div className="single_info d-flex align-items-center mt-15">
              <div className="info_icon">
                <i className="lni lni-phone" />
              </div>
              <div className="info_content media-body">
                <p>+123465894883</p>
                <p>+123874922737</p>
              </div>
            </div>{" "}
            {/* single info */}
            <div className="single_info d-flex align-items-center mt-15">
              <div className="info_icon">
                <i className="lni lni-envelope" />
              </div>
              <div className="info_content media-body">
                <p>hellodrone@gmail.com</p>
              </div>
            </div>{" "}
            {/* single info */}
            <div className="single_info d-flex align-items-center mt-15">
              <div className="info_icon">
                <i className="lni lni-map-marker" />
              </div>
              <div className="info_content media-body">
                <p>888 6th 10001 Oakwood Avenue, New York City, USA</p>
              </div>
            </div>{" "}
            {/* single info */}
          </div>{" "}
          {/* contact info */}
        </div>
        <div className="col-lg-8">
          <div className="contact_form pt-20">
            <form id="contact-form" action="assets/contact.php" method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="single_form mt-30">
                    <input type="text" name="name" placeholder="Name" />
                  </div>{" "}
                  {/* single form */}
                </div>
                <div className="col-md-6">
                  <div className="single_form mt-30">
                    <input type="email" name="email" placeholder="Email" />
                  </div>{" "}
                  {/* single form */}
                </div>
                <div className="col-md-6">
                  <div className="single_form mt-30">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                    />
                  </div>{" "}
                  {/* single form */}
                </div>
                <div className="col-md-6">
                  <div className="single_form mt-30">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Drone Name"
                    />
                  </div>{" "}
                  {/* single form */}
                </div>
                <div className="col-md-12">
                  <div className="single_form mt-30">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>{" "}
                  {/* single form */}
                </div>
                <p className="form-message" />
                <div className="col-md-12">
                  <div className="single_form mt-30">
                    <button className="main-btn">Submit</button>
                  </div>{" "}
                  {/* single form */}
                </div>
              </div>{" "}
              {/* row */}
            </form>
          </div>{" "}
          {/* contact form */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
  {/*====== CONTACT PART ENDS ======*/}
  {/*====== FOOTER PART START ======*/}
  <section id="footer" className="footer_area">
    <div className="footer_widget pt-50 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer_about mt-50">
              <a href="#">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonum eirmod tempor invidunt ut labore et dolomagna vero
                eos etaccusa diam.
              </p>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="lni lni-facebook-filled" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-twitter-original" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-instagram-original" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni lni-linkedin-original" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* footer about */}
          </div>
          <div className="col-lg-8">
            <div className="footer_link_wrapper d-flex flex-wrap">
              <div className="footer_link mt-45">
                <h4 className="footer_title">Quick Links</h4>
                <ul className="link">
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Branches</a>
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
              <div className="footer_link mt-45">
                <h4 className="footer_title">Why To Buy</h4>
                <ul className="link">
                  <li>
                    <a href="#">Direct</a>
                  </li>
                  <li>
                    <a href="#">Amazon</a>
                  </li>
                  <li>
                    <a href="#">Walmart</a>
                  </li>
                  <li>
                    <a href="#">BestBuy</a>
                  </li>
                  <li>
                    <a href="#">Etsy</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
              <div className="footer_link mt-45">
                <h4 className="footer_title">Support</h4>
                <ul className="link">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Tutorial</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
            </div>{" "}
            {/* footer link wrapper */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer widget */}
    <div className="footer_copyright">
      <div className="container">
        <div className="copyright text-center">
          <p>
            Designed and Developed by{" "}
            <a href="https://uideck.com" rel="nofollow">
              UIdeck
            </a>
          </p>
        </div>{" "}
        {/* copyright */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* footer copyright */}
  </section>
  {/*====== FOOTER PART ENDS ======*/}
  {/*====== BACK TOP TOP PART START ======*/}
  <a href="#" className="back-to-top">
    <i className="lni lni-chevron-up" />
  </a>
  {/*====== BACK TOP TOP PART ENDS ======*/}
</>

        <SmoothScrollingAnchorLinks />
    </>
  )
}

export default App
