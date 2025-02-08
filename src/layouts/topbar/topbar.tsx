import React from 'react';
import styles from './topbar.module.scss';

const Topbar: React.FC = () => {
    const photo = "/images/FooterLogo.jpeg";
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <div className={styles.item}>
                        <img src={photo} alt="Логотип компании" />
                    </div>
                </div>
                <div className={styles.addressTextBox}>
                    <p className={styles.addressText}>
                        <a href="#">Севастополь, улица Токарева, 18В</a>
                    </p>
                </div>
                <button type="button" className={styles.onlineButton}>Онлайн запись</button>
                <div className={styles.topbarline}></div>
            </div>
        </header>
    );
};

export default Topbar;
