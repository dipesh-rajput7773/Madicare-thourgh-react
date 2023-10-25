import React from 'react'

function CardComponents(props) {
  return (
    
<div className="col-lg-4 col-md-4">     
    <div className="plans-card">
  <h4>{props.heading}</h4>
  <div className="card-content">
    <div className="plan-h">
      
      <span className="small-text">$</span>
      <h2>{props.price}</h2>
    </div>
    <ul>


      {
        props.listItem.map((item,index)=>{
            return <li key={index}> {item}</li>
        })

      }


      
    </ul>
    <div className="link-btn">
    {<a href='#' className='card-link'>{props.button}</a>}
  
    </div>
  </div>
</div>
</div>

  )
}




export default CardComponents