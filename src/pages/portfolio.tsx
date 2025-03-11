import PhotoBlock from "./photoBlock";
import s from "./portfolio.module.scss";

const Portfolio = () => {
     return (
          <div className={s.content}>
               <ul className={s.links}>
                    <li className={s.active}>
                         <a href="/" >Главная</a>
                    </li>
                    <li className={s.inactive}>
                         <a>Галерея</a>
                    </li>
               </ul>
               <PhotoBlock />
          </div>
     )
}

export default Portfolio