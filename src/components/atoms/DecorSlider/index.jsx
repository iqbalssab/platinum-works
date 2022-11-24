import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'

// import CSS
import './decorSlider.css'

// import modules
import { Parallax, Autoplay } from 'swiper'

const DecorSlider = () => {
  return (
    <>
        <Swiper
        speed={1000}
        parallax={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Parallax, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg flex flex-wrap"
          
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Wedding
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Engagement
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Anniversary
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Birthday Party
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Tedak Siten
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax-opacity="0">
            Tasyakuran
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            
          </div> 
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default DecorSlider