import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-story-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
            Like an easy click in “De Clique” that's how we met, then, we connected and bonded effortlessly and with the conviction of a feeling so indescribable, we were certain that we are meant for each other.</p>
            
            <p>
            There aren't so many people you just'‘click' with, and when you find such persons, you don't just let them go. Do you know that feeling? That beautiful connection when you feel as though the communication and relationship between you and someone is not just the product of intentional efforts but rather a Divine Grace.<br/>
That's what we felt. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
