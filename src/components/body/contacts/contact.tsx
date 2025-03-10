import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import s from './contact.module.scss';
import Maps from "./maps/maps";

const BetterSchedule: React.FC = () => {
     return (
          <div className={s.container} id="contact">
               <h3>
                    Контакты
               </h3>
               <div className={s.contact}>

                    <div className={s.TextBlock}>
                         <p className={s.mtext}>В In Balance вас встретят дружелюбные и талантливые специалисты, вам предложат широкий выбор услуг по уходу.</p>
                         <ul className={s.list}>
                              <li><FaClock className={s.icon} /></li>
                              <li >Пн-Вс: 10:00 - 22:00</li>
                         </ul>
                         <ul className={s.list}>
                              <li><FaPhoneAlt className={s.icon} /></li>
                              <li> +7 (978) 346-05-26</li>
                         </ul>
                    </div>
                    <div>
                         <Maps />
                    </div>
               </div>
          </div>

     )
}

export default BetterSchedule;