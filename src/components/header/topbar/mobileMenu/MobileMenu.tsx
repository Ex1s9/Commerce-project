import { useState } from 'react';
import MenuLinks from './MenuLinks';
import s from "./MobileMenu.module.scss";

const MobileMenu = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     return (
          <div className={s.headerElement}>
               <div className={s.headerRight}>
                    <label className={s.burger} htmlFor="burger">
                         <input type="checkbox" onChange={toggleMenu} checked={isOpen} id="burger" />
                         <span></span>
                         <span></span>
                         <span></span>
                    </label>
               </div>
               <div className={`${s.menuList} ${isOpen ? s.open : ''}`}>
                    <div className={s.menuContent}>
                         <MenuLinks />
                    </div>
               </div>
          </div>
     );
};

export default MobileMenu;