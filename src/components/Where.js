import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-story-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Traditional Wedding</h5>
              <p>
                <i className='ti-location-pin'></i>Location: Okoroafor Ivueze Compound, Ibom Village, Arochukwu, Abia State.
              </p>
              <p>
                <i className='ti-time'></i> <span>Date: September 10th, 2022</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>White Wedding</h5>
              <p>
                <i className='ti-location-pin'></i> Location: Lagos, Nigeria
              </p>
              <p>
                <i className='ti-time'></i> <span>Date: September 24th, 2022</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Where
