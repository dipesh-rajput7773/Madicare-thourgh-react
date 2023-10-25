import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Testimonial() {
  return (
    <section className="Testimonials-wrapper">
      <div className="testimonials-content">
        <div className="container">
          <div className="Testimonials-heading wrapper-headind">
            <h2 className="text-center">What Our Client Say</h2>


            <Carousel
              swipeable={false}
              infinite={true}
              autoPlay={false}
              draggable={true}
              showDots={false}
              autoPlaySpeed={1000}
              arrows={false}
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div className="testimonials-content-fast">
                  <div className="quote-icon">
                    <img src="./quote.png" />
                  </div>{" "}
                  <p>
                    {" "}
                    I've been with the organisation for the past two years.
                    What a fantastic group of professionals! I have come a
                    long way with your support, tackling the most difficult
                    IIT JEE questions! Excellent training!
                  </p>
                  <div className="fast-Testimonials d-flex">
                    <div className="fast-Testimonials-image">
                      <img src="./man-testimonial-png.png" />
                      <div className="fast-Testimonials-image-section">
                        <h5>Rahul sharma </h5>
                        <span className="sky-sub">
                          Senior Data Scientist
                        </span>
                      </div>
                    </div>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>



              <div>
                <div className="testimonials-content-fast">
                  <div className="quote-icon">
                    <img src="./quote.png" />
                  </div>{" "}
                  <p>
                    {" "}
                    I've been with the organisation for the past two years.
                    What a fantastic group of professionals! I have come a
                    long way with your support, tackling the most difficult
                    IIT JEE questions! Excellent training!
                  </p>
                  <div className="fast-Testimonials d-flex">
                    <div className="fast-Testimonials-image">
                      <img src="./man-testimonial-png.png" />
                      <div className="fast-Testimonials-image-section">
                        <h5>Rahul sharma </h5>
                        <span className="sky-sub">
                          Senior Data Scientist
                        </span>
                      </div>
                    </div>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonials-content-fast">
                  <div className="quote-icon">
                    <img src="./quote.png" />
                  </div>{" "}
                  <p>
                    {" "}
                    I've been with the organisation for the past two years.
                    What a fantastic group of professionals! I have come a
                    long way with your support, tackling the most difficult
                    IIT JEE questions! Excellent training!
                  </p>
                  <div className="fast-Testimonials d-flex">
                    <div className="fast-Testimonials-image">
                      <img src="./man-testimonial-png.png" />
                      <div className="fast-Testimonials-image-section">
                        <h5>Rahul sharma </h5>
                        <span className="sky-sub">
                          Senior Data Scientist
                        </span>
                      </div>
                    </div>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonials-content-fast">
                  <div className="quote-icon">
                    <img src="./quote.png" />
                  </div>{" "}
                  <p>
                    {" "}
                    I've been with the organisation for the past two years.
                    What a fantastic group of professionals! I have come a
                    long way with your support, tackling the most difficult
                    IIT JEE questions! Excellent training!
                  </p>
                  <div className="fast-Testimonials d-flex">
                    <div className="fast-Testimonials-image">
                      <img src="./man-testimonial-png.png" />
                      <div className="fast-Testimonials-image-section">
                        <h5>Rahul sharma </h5>
                        <span className="sky-sub">
                          Senior Data Scientist
                        </span>
                      </div>
                    </div>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Testimonial