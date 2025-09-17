import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import img1 from './photos/img1.jpg'
import img2 from './photos/img2.webp'
import img3 from './photos/img3.webp'
import img4 from './photos/img4.jpg'
import { Zoom, Slide } from 'react-awesome-reveal';

import './Slider.css'

function Slider() {

  return (
    <>
      <section className='main'>
        <div className="wrapper">


          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 9000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className="slide">
              <Zoom>
                <img src={img1} className='photo' />
              </Zoom>
              <div className="image-data">
                <h2>KK Blossoms</h2>
                <span className="text">This is where we teach students skills they need to transform themselves, others, and our global communities.</span>

              </div>
            </SwiperSlide>




            <SwiperSlide className="slide">
              <Zoom duration={1500}>
                <img src={img2} className='photo' />
              </Zoom>
              <div className="image-data">
                <h2>KK Blossoms</h2>
                <span className="text">This is where we teach students skills they need to transform themselves, others, and our global communities.</span>

              </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
              <Zoom duration={1500}>
                <img src={img3} className='photo' />
              </Zoom>
              <div className="image-data">
                <h2>KK Blossoms</h2>
                <span className="text">This is where we teach students skills they need to transform themselves, others, and our global communities.</span>

              </div>
            </SwiperSlide>

            <SwiperSlide className="slide">
              <Zoom duration={1500}>
                <img src={img4} className='photo' />
              </Zoom>
              <div className="image-data">
                <h2>KK Blossoms</h2>
                <span className="text">This is where we teach students skills they need to transform themselves, others, and our global communities.</span>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  )
}

export default Slider



