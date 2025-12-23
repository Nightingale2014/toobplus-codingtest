import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Test1.css";

function Test1() {
    const icons = [
        "/images/icon_01.png",
        "/images/icon_02.png",
        "/images/icon_03.png",
        "/images/icon_04.png",
        "/images/icon_05.png",
    ].map((i) => process.env.PUBLIC_URL + i);

    return (
        <section id="test1" className="test1">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        autoplay: { delay: 2000 },
                    },
                    768: {
                        slidesPerView: 2,
                        autoplay: false,
                    },
                    1280: {
                        slidesPerView: 3,
                        autoplay: { delay: 2000 },
                    },
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {icons.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img src={src} alt={`icon-${i}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Test1;
