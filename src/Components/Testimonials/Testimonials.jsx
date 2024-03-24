
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Autoplay, Pagination, } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setHeroData(data?.user?.testimonials))
    }, [])
    // console.log(heroData);
    return (
        <div id="testimonials">
            <h2 className='text-2xl md:text-4xl font-bold text-center uppercase'>Testimonials</h2>
            <p className='text-center mb-10'>What <span className='italic'>Customers Say</span></p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {heroData?.map(item => <SwiperSlide key={item.id}><Testimonial item={item}></Testimonial> </SwiperSlide>)}


            </Swiper>
        </div>
    );
};

export default Testimonials;