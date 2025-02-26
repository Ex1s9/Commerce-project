import React from 'react';
import s from './topbar.module.scss';

const Topbar: React.FC = () => {
    const photo = "/images/FooterLogo.jpeg";
    const menuItems = ["О нас", "Услуги", "Цены", "Галерея", "Отзывы", "Контакты"];

    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <div className={s.logo}>
                    <div className={s.item}>
                        <a href="#"><img src={photo} alt="Logo"/></a>
                    </div>
                </div>
                <div className={s.addressTextBox}>
                    <p className={s.addressText}>
                        <a href="#">Севастополь, улица Токарева, 18В</a>
                    </p>
                </div>
                <a href="#">
                    <button className={s.onlineButton}>Онлайн запись</button>
                </a>
                <div className={s.topbarline}></div>
                <nav className={s.menu}>
                    {menuItems.map((item, index) => (
                        <a key={index} href="#" className={s.menuItem}>{item}</a>
                    ))}
                    </nav>
                </div>
        </header>
    );
};

export default Topbar;
