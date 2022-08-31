import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Ijeoma <small>&</small> Paul
                </span>
              </a>
            </h2>
            <p className='copyright'>10th and 24th September, 2022</p>
            <p className='copyright'>Designed by <a href='tel:+2349036844187'>Ogbjoe</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
