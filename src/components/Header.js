import React from 'react'


function Header(props) {
  return (
    <>
        <section className="banner-sec">
        <div className="container">
            <header className="header-wrapper">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/"><img className="logo" src="" alt=""/>MadiCare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{background:"url(./menu.png)"}} className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                                <span></span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">About us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>

            <div className="hero-sec">

                <div className="row">
                    <div className="col-lg-7 col-md-7 ">
                        <div className="hero-content">
                            <h1 className="mt-5">{props.tagline}</h1>
                            <p className="my-4 ">{props.para}</p>
                            <div className="hero-anchor mt-5 mb-3">
                                <a className="btn mr-3 appointment-btn" href="#">Get Appointment</a>
                                <a className="btn more-btn" href="#">Learn More</a>

                            </div>

                        </div>

                    </div>
                    <div className="col-lg-5 col-md-5  mt-4">
                        <div className="hero-image">
                            <img src={props.featured}></img>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default Header