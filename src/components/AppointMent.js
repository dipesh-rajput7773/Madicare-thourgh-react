import React from 'react'

function AppointMent() {
  return (
  
    <section className="appointment-sec">
        <div className="container">
            <div className="appointment-box d-flex justify-content-center align-items-center  py-3">
                <div className="appo-box blue-box"><img src="" alt=""/><i className="fa-solid fa-user-doctor"></i> <span>Find Doctor <img className="px-2" src="./right-chevron.png"/></span>  </div>
                              <div className="appo-box sky-blue-box"><i className="bi bi-geo-alt"></i> <span>Find Location <img className="px-2" src="./right-chevron.png"/></span>  </div>

               <div className="appo-box"><img src="" alt=""/><i className="bi bi-calendar4"></i> <span>Book Appointment <img className="px-2" src="./right-chevron.png"/></span>  </div>
            </div>

        </div>
    </section>
    
  )
}

export default AppointMent