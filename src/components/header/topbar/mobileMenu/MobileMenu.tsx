import { useState } from "react";
import MenuLinks from "./MenuLinks";
import s from "./MobileMenu.module.scss";

const MobileMenu = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     const mobileLinks = [
          { to: "about", label: "О нас" },
          { to: "services", label: "Услуги" },
          { to: "galery", label: "Галерея", offset: -15 },
          { to: "reviews", label: "Отзывы", offset: -150 },
          { to: "contact", label: "Контакты", offset: -200 },
     ];

     return (
          <div className={s.headerElement}>
               <div className={s.headerRight}>
                    <label className={s.burger} htmlFor="burger">
                         <input
                              type="checkbox"
                              onChange={toggleMenu}
                              checked={isOpen}
                              id="burger"
                         />
                         <span></span>
                         <span></span>
                         <span></span>
                    </label>
               </div>
               <div className={`${s.menuList} ${isOpen ? s.open : ""}`}>
                    <div className={s.menuContent}>
                         <MenuLinks links={mobileLinks} className={s.mobileLinks} />
                    </div>
               </div>
          </div>
     );
};

export default MobileMenu;
