import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import '../Components/Slider.css';
import dog1 from '../assets/dog-coat-1.jpg';
import dog2 from '../assets/dog-coat.jpg';
import dog3 from '../assets/dog-warm.jpg';
import dog4 from '../assets/dog-warm-2.jpg';
import cat1 from '../assets/cat-warm.jpg';
import cat2 from '../assets/cat-warm-2.jpg';
import cat3 from '../assets/cat-warm-3.jpg';
import cat5 from '../assets/cat-warm-4.jpg';

function Slider() {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={cat5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={dog1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={cat1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={dog2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={cat2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={dog3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={cat3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px] object-cover' src={dog4} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Slider;