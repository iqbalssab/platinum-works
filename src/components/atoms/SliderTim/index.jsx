import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sliderTim.css";

// import required modules

import { Owner } from "../../../assets";

export default function App() {
  return (
    <>
      <Swiper
        breakpoints={{
           0: {
            slidesPerView: 1
           },
           768:{
            width:768,
            slidesPerView: 3
           }
        }}
        spaceBetween={10}
        
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-br from-sky-600 to-sky-600 via-slate-400 self-start items-end origin-top hover:scale-y-110 duration-700 md:w-full w-[80%] md:h-[80%] h-[100%]  overflow-hidden group">
          <div className="w-full h-full relative flex flex-wrap">
            <div className="absolute self-end group-hover:scale-110 origin-top-left duration-700">
              <img src={Owner} alt="" className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition duration-500 px-3 py-2 justify-self-center absolute self-end text-start">
              <p className="text-base text-white font-bold">Jordan Nevada</p>
              <p className="text-sm text-white">Owner</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-br from-sky-600 to-sky-600 via-slate-400 self-start items-end origin-top hover:scale-y-110 duration-700 md:w-full w-[80%] md:h-[80%] h-[100%] overflow-hidden group">
          <div className="w-full h-full relative flex flex-wrap">
            <div className="absolute self-end group-hover:scale-110 origin-top-left duration-700">
              <img src={Owner} alt="" className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition duration-500 px-3 py-2 justify-self-center absolute self-end text-start">
              <p className="text-base text-white font-bold">Irma Nusa N</p>
              <p className="text-sm text-white">Marketing</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-br from-sky-600 to-sky-600 via-slate-400 self-start items-end origin-top hover:scale-y-110 duration-700 md:w-full w-[80%] md:h-[80%] h-[100%] overflow-hidden group">
          <div className="w-full h-full relative flex flex-wrap">
            <div className="absolute self-end group-hover:scale-110 origin-top-left duration-700">
              <img src={Owner} alt="" className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition duration-500 px-3 py-2 justify-self-center absolute self-end text-start">
              <p className="text-base text-white font-bold">Syafiq</p>
              <p className="text-sm text-white">Pelaksana Lapangan</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-br from-sky-600 to-sky-600 via-slate-400 self-start items-end origin-top hover:scale-y-110 duration-700 md:w-full w-[80%] md:h-[80%] h-[100%] overflow-hidden group">
          <div className="w-full h-full relative flex flex-wrap">
            <div className="absolute self-end group-hover:scale-110 origin-top-left duration-700">
              <img src={Owner} alt="" className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition duration-500 px-3 py-2 justify-self-center absolute self-end text-start">
              <p className="text-base text-white font-bold">Jordan Nevada</p>
              <p className="text-sm text-white">Owner</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-br from-sky-600 to-sky-600 via-slate-400 self-start items-end origin-top hover:scale-y-110 duration-700 md:w-full w-[80%] md:h-[80%] h-[100%] overflow-hidden group">
          <div className="w-full h-full relative flex flex-wrap">
            <div className="absolute self-end group-hover:scale-110 origin-top-left duration-700">
              <img src={Owner} alt="" className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition duration-500 px-3 py-2 justify-self-center absolute self-end text-start">
              <p className="text-base text-white font-bold">Jordan Nevada</p>
              <p className="text-sm text-white">Owner</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
