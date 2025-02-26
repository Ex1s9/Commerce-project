import React from 'react';
import s from './header.module.scss';

const Header: React.FC = () => {
    const icons = [
        {
            src: "/images/icon1.png",
            text: "ГАРАНТИЯ НА СТРИЖКУ",
            info: "У всех наших гостей есть три дня.\nЧтобы понять, что стрижка им точно\nнравится.",
            className: ""
        },
        {
            src: "/images/icon2.png",
            text: "КОМФОРТ",
            info: "У нас введены единые\nстандарты сервиса",
            className: s.wider
        },
        {
            src: "/images/icon3.png",
            text: "БЕЗОПАСНОСТЬ",
            info: "Мы тщательно дезинфицируем\nрабочие места и инструменты",
            className: ""
        }
    ];

    return (
        <section className={s.container}>
            <img className={s.photo} src="/images/bg-foto.png"/>
            <h1>In Balance</h1>
            <h2>БАРБЕРШОП</h2>
            <div className={s.iconsContainer}>
                {icons.map((icon, index) => (
                    <div key={index} className={`${s.iconItem} ${icon.className}`}>
                        <img src={icon.src}/>
                        <p>{icon.text}</p>
                        <div className={s.info}>
                            {icon.info.split('\n').map((line, i) => (
                                <span key={i}>{line}<br/></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Header;
