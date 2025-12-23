import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Section1.css";

function Section1() {
    const images = [
        process.env.PUBLIC_URL + "/images/photo_01.jpg",
        process.env.PUBLIC_URL + "/images/photo_02.jpg",
        process.env.PUBLIC_URL + "/images/photo_03.jpg",
    ];

    return (
        <section id="section1" className="section1">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`slide-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Section1;
