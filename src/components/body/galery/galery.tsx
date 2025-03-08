import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/modules/navigation.scss";
import "../../../../node_modules/swiper/modules/pagination.scss";
import "../../../../node_modules/swiper/swiper.scss";
import s from "./galery.module.scss";

const images = [
     "/galery/IMG_1606.JPG",
     "/galery/IMG_2710.PNG",
     "/galery/IMG_2711.PNG",
     "/galery/IMG_2714.PNG",
     "/galery/IMG_2998.DNG",
     "/galery/IMG_3551.JPG",
     "/galery/IMG_3582.JPG"
];

const Galery = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     return (
          <main id="galery" className={s.galery}>
               <div className={s.title}>
                    <h2>Наши стрижки</h2>
                    <a>Смотреть все работы</a>
               </div>

               <Swiper
                    initialSlide={1}
                    centeredSlides={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    slidesPerView={1}
                    spaceBetween={90}
                    autoplay={false}
                    loop
                    allowTouchMove={true}
                    className={s.swiper}
                    breakpoints={{
                         990: {
                              slidesPerView: "auto",
                         }
                    }}
               >
                    {images.map((imgSrc, i) => (
                         <SwiperSlide
                              key={imgSrc}
                              className={`${s.slide} ${i === activeIndex ? s.activeSlide : ""}`}
                         >
                              <img src={imgSrc} alt="galery" />
                         </SwiperSlide>
                    ))}
               </Swiper>
          </main>
     );
};

export default Galery;
