import { useRef, useState } from "react";
import { Link } from "react-router";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/modules/navigation.scss";
import "../../../../node_modules/swiper/modules/pagination.scss";
import "../../../../node_modules/swiper/swiper.scss";
import s from "./galery.module.scss";

const images = [
     "/galery/IMG_0126.webp",
     "/galery/IMG_0527.webp",
     "/galery/IMG_1606.webp",
     "/galery/IMG_2033.webp",
     "/galery/IMG_2035.webp",
     "/galery/IMG_2036.webp",
     "/galery/IMG_2037.webp",
     "/galery/IMG_2710.webp",
     "/galery/IMG_2711.webp",
     "/galery/IMG_2714.webp",
     "/galery/IMG_2998.webp",
     "/galery/IMG_3459.webp",
     "/galery/IMG_3551.webp",
     "/galery/IMG_3582.webp"
];

const Galery = () => {
     const [activeIndex, setActiveIndex] = useState(0);
     const prevRef = useRef<HTMLButtonElement>(null);
     const nextRef = useRef<HTMLButtonElement>(null);

     return (
          <main id="galery" className={s.galery}>
               <div className={s.title}>
                    <h2>Наши стрижки</h2>
                    <Link to="/portfolio">Смотреть все работы</Link>
               </div>

               <div className={s.swiperWrapper}>
                    {/* Кастомные кнопки навигации */}
                    <button ref={prevRef} className={s.customPrev}></button>
                    <button ref={nextRef} className={s.customNext}></button>

                    <Swiper
                         modules={[Navigation, Pagination]}
                         initialSlide={1}
                         centeredSlides={true}
                         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                         slidesPerView={1}
                         spaceBetween={90}
                         loop
                         allowTouchMove={true}
                         navigation={{
                              prevEl: prevRef.current,
                              nextEl: nextRef.current,
                         }}
                         className={s.swiper}
                         breakpoints={{
                              990: {
                                   slidesPerView: "auto",
                              },
                         }}
                         onSwiper={(swiper) => {
                              setTimeout(() => {
                                   if (prevRef.current && nextRef.current) {
                                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                             swiper.params.navigation.prevEl = prevRef.current;
                                             swiper.params.navigation.nextEl = nextRef.current;
                                             swiper.navigation.init();
                                             swiper.navigation.update();
                                        }
                                   }
                              });
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
               </div>
          </main>
     );
};

export default Galery;