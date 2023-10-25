import React from 'react'

function Footer() {
  return (
    <footer className="footer-wrapper">
  <div className="container">
    <div className="brd">
      <div className="top-row">
        <div className="top-col">
          <div className="footer-top d-flex align-items-center">
            <div className="icon-f-top">
              <i className="bi bi-geo-alt" />
            </div>{" "}
            <div className="f-top-cnt">
              <div>Address</div>
              <p>
                street No 345,near <br /> js mall
              </p>
            </div>
          </div>
        </div>
        <div className="top-col">
          <div className="footer-top d-flex align-items-center">
            <div className="icon-f-top">
              <i className="bi bi-envelope" />
            </div>{" "}
            <div className="f-top-cnt">
              <div>Email</div>
              <p>info@medicare.com</p>
            </div>
          </div>
        </div>
        <div className="top-col">
          <div className="footer-top d-flex align-items-center">
            <div className="icon-f-top">
              <i className="bi bi-telephone" />
            </div>{" "}
            <div className="f-top-cnt">
              <div>Phone</div>
              <p>+142-547-6768</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brl">
      <div className="bottom-row">
        <div className="bottom-col">
          <div className="footer-b br-right">
            <span className="">Quick Link</span>
            <ul>
              <li className="bef">Home</li>
              <li className="bef">What we do?</li>
              <li className="bef">Managemente</li>
              <li className="bef">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="bottom-col">
          <div className="footer-b  text-center">
            <span className="">Follow us</span>
            <div className="d-flex footer-icon">
              <span>
                <i className="fa-brands fa-facebook" />
              </span>
              <span>
                <i className="fa-brands fa-x-twitter" />
              </span>
              <span>
                <i className="fa-brands fa-linkedin" />
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-col">
          <div className="footer-b br-left">
            <span>Services</span>
            <ul>
              <li className="bef">Mental Health Care</li>
              <li className="bef">Spine Surgeon</li>
              <li className="bef">Eye Care Center</li>
              <li className="bef">Ambulance service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer