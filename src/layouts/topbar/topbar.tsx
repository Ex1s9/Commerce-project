import React from 'react';
import s from './topbar.module.scss';

const Topbar: React.FC = () => {
    const photo = "/images/FooterLogo.jpeg";
    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <div className={s.logo}>
                    <div className={s.item}>
                        <a href="#"><img src={photo}/></a>
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
            </div>
        </header>
    );
};

export default Topbar;