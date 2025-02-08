import React from 'react';
import styles from './topbar.module.scss';

const Topbar: React.FC = () => {
    const photo = "/images/FooterLogo.jpeg";
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <div className={styles.item}>
                        <a href="#"><img src={photo}/></a>
                    </div>
                </div>
                <div className={styles.addressTextBox}>
                    <p className={styles.addressText}>
                        <a href="#">Севастополь, улица Токарева, 18В</a>
                    </p>
                </div>
                <a href="#">
                    <button className={styles.onlineButton}>Онлайн запись</button>
                </a>
                <div className={styles.topbarline}></div>
            </div>
        </header>
    );
};

export default Topbar;