import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import s from "./footer.module.scss";

const Footer: React.FC = () => {

    const links = [
        "https://t.me/+79783460526",
        "https://api.whatsapp.com/send/?phone=79783460526&text&type=phone_number&app_absent=0",
    ];

    return (
        <footer>
            <div className={s.container}>
                <div className={s.firstLine}>
                    <p className={s.nameTxt}>In Balance</p>
                    <a href={links[0]} className={s.tglIcon}>
                        <RiTelegram2Fill />
                    </a>
                    <a href={links[1]} className={s.tglIcon}>
                        <FaWhatsapp />
                    </a>
                </div>
                <div className={s.mainFooterLine}>
                    <div className={s.contacts}>
                        <p className={s.phone}>+7 (978) 346-05-26</p>
                        <p className={s.date}>Пн-Вс: 10:00 - 22:00</p>
                    </div>
                    <div className={s.footerMenu}>
                        <p className={s.txt}>
                            In Balance - это опыт ухода, который заслуживает каждый мужчина,
                            где традиционное барберство встречается с уютной атмосферой и
                            вкусными напитками. Сядьте, расслабьтесь, позаботьтесь о себе — а
                            затем насладитесь кофе или холодным напитком в нашем лаунже.
                        </p>
                    </div>
                </div>
                <div className={s.copyright}>Copyright 2025 ©</div>
            </div>
        </footer>
    );
};

export default Footer;
