import React from "react";
import headerCSS from "./../Header/Header.module.css";
import { Autoplay } from "swiper/modules";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

function Header(){
    return (
        <div className={headerCSS.header_wrapper}>
            <Swiper 
            slidesPerView={1}
            spaceBetween={0}
            loop = {true}
            autoplay = {{delay : 2500}}
            modules={[Autoplay]}
            className={headerCSS.swiper}>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
                        <div className={headerCSS.content}>
                            <small>Lessons & Trips</small>
                            <h2>Enjoy Your <span>Time</span> by <span>US</span></h2>
                            <p>Book Now <span>Via What's App</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
                        <div className={headerCSS.content}>
                            <small>Lessons & Trips</small>
                            <h2>Enjoy Your <span>Time</span> by <span>US</span></h2>
                            <p>Book Now <span>Via What's App</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
                        <div className={headerCSS.content}>
                            <small>Lessons & Trips</small>
                            <h2>Enjoy Your <span>Time</span> by <span>US</span></h2>
                            <p>Book Now <span>Via What's App</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header