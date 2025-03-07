import s from './footer.module.scss';
import React from "react";

const Footer: React.FC = () => {

    const listBar = [
        { info:
            <a href="#">О нас</a>
        },
        { info:
            <a href="#">Услуги</a>
        },
        { info:
            <a href="#">Контакты</a>
        }
    ];

    return (
        <footer>
            <div className={s.container}>
                <p className={s.nameTxt}>In Balance</p>
                <div className={s.mainFooterLine}>
                    <div className={s.contacts}>
                        <p className={s.phone}>+7 (978) 346-05-26</p>
                        <p className={s.date}>Пн-Вс: 10:00 - 22:00</p>
                    </div>
                    <div className={s.footerMenu}>
                        <p className={s.txt}>
                            In Balance - это опыт ухода, который заслуживает каждый мужчина,
                            где традиционное барберство встречается с уютной атмосферой и
                            вкусными напитками. Сядьте, расслабьтесь, позаботьтесь о себе — а затем
                            насладитесь кофе или холодным напитком в нашем лаунже.
                        </p>
                    </div>
                </div>
                <div className={s.copyright}>Copyright 2025 ©</div>
                <div className={s.buttonList}>
                    {listBar.map((line,index) => (
                        <div key={index} className={s.element}>{line.info}</div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;