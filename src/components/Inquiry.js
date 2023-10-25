import React from 'react'

function Inquiry() {
  return (
    <section classname="make py-5">
    <div classname="container">
      <div classname="form-bg">
        <div classname="row">
          <h2 classname="text-center mt-4 color-c">Make an Appointment</h2>
          <div classname="col-lg-6 ">
            <form classname="bg-white">
              <h2>Details</h2>
              <div classname="row">
                <div classname="col mb-4 col-n">
                  <input
                    type="text mb-3"
                    classname="form-control"
                    placeholder="First name*"
                  />
                </div>
                <div classname="col mb-4 col-n">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="Last name*"
                  />
                </div>
              </div>
              <div classname="row">
                <div classname="col col-n mb-4">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="First name*"
                  />
                </div>
                <div classname="col col-n mb-4">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="Last name*"
                  />
                </div>
              </div>
              <div classname="row">
                <div classname="col col-n mb-4">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="First name*"
                  />
                </div>
                <div classname="col col-n mb-4">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="Last name*"
                  />
                </div>
              </div>
              <div classname="row">
                <div classname="mb-3">
                  <textarea
                    classname="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button type="submit" classname="btn btn-primary mb-3">
                Submit Now
              </button>
            </form>
          </div>
          <div classname="col-lg-6">
            <div classname="bg-white">
              <div classname="form-content ">
                <div classname="form-head">
                  <img src="./images/heart-rate.png" />
                  <h3 classname="f-h"> Emergency Services</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  quod et ducimus perferendis quibusdam quam harum, quasi nesciunt
                  dicta est voluptatum aliquid numquam porro, obcaecati voluptatem
                  velit in quae obcaecati voluptatem velit in quae obcaecati
                  voluptatem velit in quae
                </p>
              </div>
              <div classname="form-content">
                <div classname="form-head">
                  <img src="./images/clock.png" alt="" />
                  <h3 classname="f-h">Opening Hours</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  quod et ducimus perferendis quibusdam quam harum, quasi nesciunt
                  dicta{" "}
                </p>
                <div classname="table">
                  <table classname="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">Opening</th>
                        <th scope="col">Closing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monday to wednesday</td>
                        <td>8:00 am</td>
                        <td>10:00PM</td>
                      </tr>
                      <tr>
                        <td>Monday to wednesday</td>
                        <td>8:00 am</td>
                        <td>10:00 PM</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>Off</td>
                        <td>Off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Inquiry