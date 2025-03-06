import { Link } from 'react-scroll';
import s from "./MenuLinks.module.scss";

const MenuLinks = () => {
     return (
          <div className={s.links}>
               <Link to="about" smooth={true} duration={850}>
                    О нас
               </Link>
               <Link to="review" smooth={true} duration={850} offset={-250}>
                    Услуги
               </Link>
               <Link to="catalog" smooth={true} duration={850}>
                    Цена
               </Link>
               <Link to="contact" smooth={true} duration={850}>
                    Галерея
               </Link>
               <Link to="contact" smooth={true} duration={850}>
                    Отзывы
               </Link>
               <Link to="contact" smooth={true} duration={850}>
                    Контакты
               </Link>
          </div>
     );
};

export default MenuLinks;
