import React from 'react';
import {Carousel} from 'react-bootstrap';
import one from '../Slideshow/Imge/2.jpg';
import two from '../Slideshow/Imge/11.jpg';
import three from '../Slideshow/Imge/3.jpg';
import four from '../Slideshow/Imge/4.jpg';
import five from '../Slideshow/Imge/5.jpg';
import six from '../Slideshow/Imge/6.jpg';
import seven from '../Slideshow/Imge/7.jpg';
import eight from '../Slideshow/Imge/8.jpg';
import nine from '../Slideshow/Imge/9.jpg';
import ten from '../Slideshow/Imge/10.jpg';
import './slideshow.css';

const Slideshow = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='slider col-12'>
      <Carousel>
        <Carousel.Item>
          <img className="block" src={one} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={two} alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={three} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
         <img className="block" src={four} alt="four slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={five} alt="five slide"/>
        </Carousel.Item>
        <Carousel.Item>
           <img className="block" src={six} alt="six slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={seven} alt="seven slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={eight} alt="eight slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={nine} alt="nine slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="block" src={ten} alt="ten slide"/>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
  </div>
  )
};

export default Slideshow;
