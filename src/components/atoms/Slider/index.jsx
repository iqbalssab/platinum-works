// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'

import { img1,img2,img3 } from '../../../assets';

// Nambahin style CSS
import './slider.css'
const Slider = () => {
    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwipe bg-slate-700">
    
      <SwiperSlide><img src={img1} alt='gambar'/> </SwiperSlide>
      <SwiperSlide><img src={img2} alt='gambar2'/></SwiperSlide>
      <SwiperSlide><img src={img3} alt='gambar3'/></SwiperSlide>
      <SwiperSlide className='self-center'><p className='text-white'>Slide 4</p></SwiperSlide>
    
      
    </Swiper>
    )
}

export default Slider