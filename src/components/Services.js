import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Services() {
    return (
        <section className="Services-sec">
            <div className="container">
                <div className="Services-content text-center py-4">
                    <h2 className="py-4">Our Services</h2>
                    <p className="mb-4">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <Carousel responsive={responsive}>
                    <div>
                        <div className="services-box text-center">
                            <img src="./thinking.png" /> <br />
                            Mental Health
                        </div>
                    </div>
                    <div>
                        <div className="services-box text-center">
                            <img src="./exercise.png" /> <br />
                            Physical Health
                        </div>
                    </div>


                    <div>
                        <div className="services-box text-center">
                            <img src="./tooth.png" /> <br />
                            Dental
                        </div>
                    </div>
                    <div>
                        <div className="services-box text-center">
                            <img src="./thinking.png" /> <br />
                            Mental Health
                        </div>
                    </div>
                    <div>
                        <div className="services-box text-center">
                            <img src="./exercise.png" /> <br />
                            Physical Health
                        </div>
                    </div>
                    <div>
                        <div className="services-box text-center">
                            <img src="./tooth.png" /> <br />
                            Dental
                        </div>
                    </div>
                    <div>
                        <div className="services-box text-center">
                            <img src="./thinking.png" /> <br />
                            Mental Health
                        </div>
                    </div>

                </Carousel>





            </div>
        </section>

    )
}

export default Services