import React from 'react'

function FormSection() {
  return (
    <section className="make py-5">
  <div className="container">
    <div className="form-bg">
      <div className="row">
        <h2 className="text-center mt-4 color-c">Make an Appointment</h2>
        <div className="col-lg-6 ">
          <form className="bg-white">
            <h2>Details</h2>
            <div className="row">
              <div className="col mb-4 col-n">
                <input
                  type="text mb-3"
                  className="form-control"
                  placeholder="First name*"
                />
              </div>
              <div className="col mb-4 col-n">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name*"
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-n mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name*"
                />
              </div>
              <div className="col col-n mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name*"
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-n mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name*"
                />
              </div>
              <div className="col col-n mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name*"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Submit Now
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="bg-white">
            <div className="form-content ">
              <div className="form-head">
                <img src="./heart-rate.png" />
                <h3 className="f-h"> Emergency Services</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                quod et ducimus perferendis quibusdam quam harum, quasi nesciunt
                dicta est voluptatum aliquid numquam porro, obcaecati voluptatem
                velit in quae obcaecati voluptatem velit in quae obcaecati
                voluptatem velit in quae
              </p>
            </div>
            <div className="form-content">
              <div className="form-head">
                <img src="./clock.png" alt="" />
                <h3 className="f-h">Opening Hours</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                quod et ducimus perferendis quibusdam quam harum, quasi nesciunt
                dicta{" "}
              </p>
              <div className="table">
                <table className="table table-borderless">
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

export default FormSection