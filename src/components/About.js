import React from 'react'

function About(props) {
  return (
    <section className="about-us">
    <div className="container">
        <div className="row">
              <div className="col-lg-5">
                  <div className="about-img">
                   
                     <img src={props.featured}></img>
                  </div>
              </div>
            <div className="col-lg-7">
                <div className="about-content">
                    <h3>About Us</h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                    <button type="button" className="btn btn-primary mt-5">Read more</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About