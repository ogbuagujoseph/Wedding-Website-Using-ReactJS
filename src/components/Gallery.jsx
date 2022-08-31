import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import gallery1 from '../assets/gallery/1.jpg'
import gallery2 from '../assets/gallery/2.jpg'
import gallery3 from '../assets/gallery/3.jpg'
import gallery4 from '../assets/gallery/4.jpg'
import gallery5 from '../assets/gallery/5.jpg'
import gallery6 from '../assets/gallery/6.jpg'
import gallery7 from '../assets/gallery/7.jpg'
import gallery8 from '../assets/gallery/8.jpg'
import gallery9 from '../assets/gallery/9.jpg'
import gallery10 from '../assets/gallery/10.jpg'
import gallery11 from '../assets/gallery/11.jpg'
import gallery12 from '../assets/gallery/12.jpg'
import gallery13 from '../assets/gallery/13.jpg'
import gallery14 from '../assets/gallery/14.jpg'
import gallery15 from '../assets/gallery/15.jpg'
import gallery16 from '../assets/gallery/16.jpg'
import gallery17 from '../assets/gallery/17.jpg'
import gallery18 from '../assets/gallery/18.jpg'
import gallery19 from '../assets/gallery/19.jpg'
import gallery20 from '../assets/gallery/20.jpg'

const Gallery2 = () => {
  return (
    <div id='gallery' className='section-story-padding'>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={gallery1} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery2} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery3} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery4} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery5} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery6} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery7} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery8} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery9} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery10} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery11} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery12} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery13} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery14} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery15} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery16} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery17} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery18} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery19} className="sliderimg" alt='Our Love shall never die'/>
      <img src={gallery20} className="sliderimg" alt='Our Love shall never die'/>
</AliceCarousel>
    </div>
  )
}

export default Gallery2
