import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./reviews.module.scss";
import ReviewsBlock from "./reviewsBlock";

const reviewsData = [
     {
          title: 'Очень понравилось, Всё чётко, рекомендую.',
          author: 'Ex1s9',
          date: '9 июля',
     },
     {
          title: 'Отличный сервис и профессионализм.',
          author: 'User123',
          date: '5 июля',
     },
     {
          title: 'Очень вежливый персонал, отзывчивый и коммуникабельный. Веселые ребята, шикарная атмосфера.',
          author: 'Ex1s92',
          date: '9 сентября',
     },
     {
          title: 'Отличный барбершоп! Крутая атмосфера и профи мастера!',
          author: 'User1',
          date: '9 марта',
     },
     {
          title: 'Великолепное место, где из ваших волос сделают конфетку.Спасибо большое за качественную работу, отличное настроение и вкусный кофе!',
          author: 'User12',
          date: '9 августа',
     },
     {
          title: 'Отличная стрижка, превосходный мастер Иван сделал все в лучшем виде! Если стричься - то только здесь! Всем советую!',
          author: 'Ex1s93',
          date: '9 января',
     }
];

const Reviews = () => {
     return (
          <div className={s.reviews}>
               <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: false,
                         pauseOnMouseEnter: false
                    }}
                    allowTouchMove={false}
                    modules={[Autoplay]}
                    className={s.swiper}
               >
                    {reviewsData.map((review, index) => (
                         <SwiperSlide key={index} className={s.slide}>
                              <ReviewsBlock
                                   author={review.author}
                                   title={review.title}
                                   date={review.date}
                              />
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     )
}

export default Reviews;