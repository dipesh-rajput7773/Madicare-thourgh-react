import React from 'react'
import CardComponents from './CardComponents'

import Item from './Item.json';


//const itemsArray = new Array(numberOfItems).fill(0);
function Plans() {


  return (
    <section className="plan-sec py-4">
      <div className="container">
        <div className="plan-content">
          <h2 className="text-center py-4">Choose your Treatment Plan</h2>


          <div className="row">
           

{Item.map((element, index) => (
      <CardComponents key={index}
      heading={element.package_name}
      price={element.price}
      listItem={element.package_list}
      button ="Set Link"

    />
    ))}

          </div>





        </div>




      </div>
    </section>
  )
}

export default Plans