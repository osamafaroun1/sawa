import React from 'react'
import './ServiceHome.css'

function ServiceHome({left ,image , details}) {
    if (left)
  return (
    <div className='service-home-left '>
        <div className="service-image">
            <img src={image} alt="service image" />
        </div>
        <div className="service-text">
            {details}
        </div>
    </div>
  )
  else return(
    <div className='service-home-right '>
        <div className="row">
            <div className="service-text col-8">
                {details}
            </div>
            <div className="service-image col-4">
                <img src={image} alt="service image" />
            </div>
            
        </div>
    </div>
  )
}

export default ServiceHome