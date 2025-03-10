import s from "./index.module.scss"
import Reviews from "./reviews"

const MainReviews = () => {
     return (
          <div className={s.container}>
               <h2>Отзывы</h2>
               <div className={s.review}>
                    <div className={s.reviewLeft}>
                         <p>Мы стремимся повышать качество услуг, поэтому просим вас оставить свой отзыв в независимом источнике</p>
                         <a>Барбершоп на яндекс картах</a>
                    </div>
                    <div className={s.reviewRight}>
                         <Reviews />
                    </div>
               </div>
          </div>
     )
}

export default MainReviews