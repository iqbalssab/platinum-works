// import Swiper core and required modules
import { Autoplay, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'

// Nambahin style CSS
import './slider.css'

// Import Foto Mark Zuckerberg
import { Owner } from '../../../assets';

const Slider = () => {
    return(
    <Swiper
      autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
      speed={600}
      parallax={true}
      modules={[Autoplay, Parallax]} 
      className="mySwipe">

      <SwiperSlide>
        <div className='px-4 w-full h-52 overflow-y-scroll' >
            <div className='my-2 mx-auto h-20 w-20 rounded-full overflow-hidden bg-white border-2' data-swiper-parallax="-300">
              <img src={Owner} alt='fotopropil' />
            </div>
            <h3 className='pt-2 font-bold text-lg text-center text-primary underline underline-offset-4' data-swiper-parallax="-200">Suchai</h3>
            <p className=' pb-2 text-base text-white text-justify' data-swiper-parallax="-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellat consequatur maxime optio. Nulla nostrum eaque ullam dignissimos nisi, blanditiis voluptatem eligendi, quasi ipsam est veniam, quas corrupti quis iste error placeat nihil deserunt. Aut aliquam modi reiciendis. Minus architecto explicabo quo distinctio deserunt et est. Necessitatibus, deserunt corrupti.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' px-4 w-screen h-52 overflow-y-scroll' >
            <div className='my-2 mx-auto h-20 w-20 rounded-full overflow-hidden bg-white border-2' data-swiper-parallax="-300">
              <img src={Owner} alt='fotopropil' />
            </div>
            <h3 className='pt-2 font-bold text-lg text-center text-primary underline underline-offset-4' data-swiper-parallax="-200">Pelat</h3>
            <p className=' pb-2 text-base text-white text-justify' data-swiper-parallax="-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellat consequatur maxime optio. Nulla nostrum eaque ullam dignissimos nisi, blanditiis voluptatem eligendi, quasi ipsam est veniam, quas corrupti quis iste error placeat nihil deserunt. Aut aliquam modi reiciendis. Minus architecto explicabo quo distinctio deserunt et est. Necessitatibus, deserunt corrupti.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' px-4 w-screen h-52 overflow-y-scroll' >
            <div className='my-2 mx-auto h-20 w-20 rounded-full overflow-hidden bg-white border-2' data-swiper-parallax="-300">
              <img src={Owner} alt='fotopropil' />
            </div>
            <h3 className='pt-2 font-bold text-lg text-center text-primary underline underline-offset-4' data-swiper-parallax="-200">Boog</h3>
            <p className=' pb-2 text-base text-white text-justify' data-swiper-parallax="-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellat consequatur maxime optio. Nulla nostrum eaque ullam dignissimos nisi, blanditiis voluptatem eligendi, quasi ipsam est veniam, quas corrupti quis iste error placeat nihil deserunt. Aut aliquam modi reiciendis. Minus architecto explicabo quo distinctio deserunt et est. Necessitatibus, deserunt corrupti.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' px-4 w-screen h-52 overflow-y-scroll' >
            <div className='my-2 mx-auto h-20 w-20 rounded-full overflow-hidden bg-white border-2' data-swiper-parallax="-300">
              <img src={Owner} alt='fotopropil' />
            </div>
            <h3 className='pt-2 font-bold text-lg text-center text-primary underline underline-offset-4' data-swiper-parallax="-200">Sawadhikapp</h3>
            <p className=' pb-2 text-base text-white text-justify' data-swiper-parallax="-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellat consequatur maxime optio. Nulla nostrum eaque ullam dignissimos nisi, blanditiis voluptatem eligendi, quasi ipsam est veniam, quas corrupti quis iste error placeat nihil deserunt. Aut aliquam modi reiciendis. Minus architecto explicabo quo distinctio deserunt et est. Necessitatibus, deserunt corrupti.</p>
        </div>
      </SwiperSlide>

    </Swiper>
    )
}

export default Slider